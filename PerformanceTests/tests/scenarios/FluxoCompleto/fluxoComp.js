import {ENDPOINTS,baseChecks,BaseRest,testConfig,generateTickets,generateMovies} from '../../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';

/*export function handleSummary(data) {
    return {
        "PostMovies-StressBat3.html": htmlReport(data),
    };
}*/

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseCheck = new baseChecks();
//export const options = testConfig.options.stressTest;