import {ENDPOINTS,baseChecks,baseRest,testConfig,generateTickets} from '../../../../support/base/baseTest.js';

export default function () {
    
    const res = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT,generateTickets());
    console.log(res);
    console.log(res.body);

    baseChecks.checkStatusCode(res,201);
    baseChecks.checkResponseTime(res,200);
}