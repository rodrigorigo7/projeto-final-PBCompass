import { check } from "k6";

export class baseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check(response, {
            'status code check': (r) => r.status === expectedStatus,
        });
    }

    checkResponseTime(response, timeResponse = 900) {
        check(response, {
            'Tempo de resposta dentro do esperado': (r) => r.timings.duration < timeResponse,
        });
    }
}