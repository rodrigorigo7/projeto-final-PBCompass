import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';
import {ENDPOINTS,baseChecks,BaseRest,testConfig,generateMovies} from '../../../support/base/baseTest.js';

/*export function handleSummary(data) {
    return {
        "PostMovies-StressBat3.html": htmlReport(data),
    };
}*/

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseCheck = new baseChecks();
//export const options = testConfig.options.stressTest;

export default function () {

    const res = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT,generateMovies());
    console.log(res);
    console.log(res.body);

    baseCheck.checkStatusCode(res,201);
    baseCheck.checkResponseTime(res,200);

    sleep(1);
}

export function teardown() {
    const resGet = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT)
    let movies = resGet.json();
    let movieId = movies.map(movie => movie._id);

    movieId.forEach(id => {   
    const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT +`/${id}`)
    });
}
