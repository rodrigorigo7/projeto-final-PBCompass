import {ENDPOINTS,baseChecks,BaseRest,testConfig,generateTickets} from '../../../../support/base/baseTest.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseCheck = new baseChecks();
//export const options = testConfig.options.stressTest;

export default function () {
    
    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT,generateTickets());
    console.log(res);
    console.log(res.body);

    baseCheck.checkStatusCode(res,201);
    baseCheck.checkResponseTime(res,200);
}