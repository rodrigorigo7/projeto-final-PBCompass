import {ENDPOINTS,baseChecks,BaseRest,testConfig} from '../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';

export function handleSummary(data) {
    return {
        "GetMovies-Escalabilidade.html": htmlReport(data),
    };
}

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseCheck = new baseChecks();
export const options = testConfig.options.escalabidadeTest;

export default function () {

   
    const res = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    console.log(res);
    console.log(res.body);
    baseCheck.checkStatusCode(res,200);
    baseCheck.checkResponseTime(res,200);

    sleep(1);
}