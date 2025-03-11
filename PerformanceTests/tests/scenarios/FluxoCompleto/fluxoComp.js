import {ENDPOINTS,baseChecks,BaseRest,testConfig,generateTickets,generateMovies} from '../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';

export function handleSummary(data) {
    return {
        "FluxoCompleto-Smoke.html": htmlReport(data),
    };
}

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseCheck = new baseChecks();
export const options = testConfig.options.smokeTest;

export default function () {

    const resMovie = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT,generateMovies());
    
    const resTicket = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT,generateTickets());
 

    baseCheck.checkStatusCode(resMovie,201);
    baseCheck.checkResponseTime(resMovie,200);
    baseCheck.checkStatusCode(resTicket,201);
    baseCheck.checkResponseTime(resTicket,200);

    const resGet = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT)
    let movies = resGet.json();
    let movieId = movies.map(movie => movie._id);
    
    movieId.forEach(id => {   
        const res = baseRest.delete(ENDPOINTS.MOVIES_ENDPOINT +`/${id}`)
        baseCheck.checkStatusCode(res,204);
        baseCheck.checkResponseTime(res,200);
    });

    sleep(1);
}