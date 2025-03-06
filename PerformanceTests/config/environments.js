export const testConfig = {
    environment: {
        hml: {
            url: 'http://localhost:3000'
        }
    },
    options: {
        smokeTest: {
            vus: 1,
            duration: '5s',
        },
        loadTest: {
            stages: [
                { duration: '50s', target: 30 },
                { duration: '50s', target: 50 },
                { duration: '20s', target: 0 }
            ]
        },
        stressTest: {
            stages: [
                { duration: '30s', target: 100 },
                { duration: '30s', target: 120 },
                { duration: '30s', target: 130 },
                { duration: '30s', target: 0 }
            ]
        },
        spikeTest: {
            stages: [
                { duration: '30s', target: 50 },
                { duration: '30s', target: 100 },
                { duration: '60s', target: 0 }
            ]
        },
        escalabidadeTest: {
            stages: [
                { duration: '60s', target: 10 },
                { duration: '60s', target: 30},
                { duration: '60s', target: 0 },
                { duration: '60s', target: 50 }
            ]
        }
    },
    thresholds: {
        http_req_duration: ['p(95)<900', 'avg<500', 'max<1000'],
        http_req_failed: ['rate<0.01'],
        http_req_waiting: ['p(95)<500', 'avg<500'],
        checks: ['rate>0.99']
    }
};
