import app from 'index';
import request from 'supertest';
import { Bullet } from 'typings/Connector';

interface HTTPError {
    error: {
        name: string;
        message: string;
        stack?: string;
        status: number;
        text: string;
        method: string;
        path: string;
    };
}

const createOverweight = (): string => {
    let string = '';

    // 42 Because it's the perfect number to go overweight
    for (let i = 0; i < 42; i += 1) {
        string
            += '{"firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","password":"ezrkezlrkezrlmzek","hasAcceptedMails":true,"captcha":"03AGdBq24FhhL7ma6BDSXC75oSQ3_uKKSYSID3XJyoPQCkwUkkvnZqrEqShLhqus2RMpWWDHq3wXHTXm5qmA9x7mZQup0XYYN9bHj_sFH_i-EmSXfnaH5C3QwImPUd_o-E3f8Zfd6mCIPe98O9_qDHNM-GJ387Fgajj5PbFZZuj4QG2iTPeEM1IoaQdO3Zn-XmMYqU3YU18O3rMMfpLiVtk7i2k8zLPpFHiDp3US3Tc91fr0ot2xUYOGTPwM58LgnWrX31X-oezUEk8EagkPD2IAwgh0vu55DHE7HOSaARFatfeoUgNwgVTnsRmfhN1gGnxGIUKG8iklaVEYG34Vg4CZ800uxQIUALLGdbNnFV5Pwxkf4XiaOiKY-XUXoTBNu_THbbNES08Itj2N_Qj7BhTG8mvVV3sjVsS0iVHkGxnssuRZaFbZ6JciD6QJG8cB1fksMYf5_CBCil"}';
    }
    return string;
};

const connectorData: Bullet = {
    url: 'http://localhost:3000/user',
    method: 'POST',
    request: {
        headers: {
            host: 'localhost:3000',
            connection: 'keep-alive',
            'content-length': '417873',
            accept: 'application/json, text/plain, */*',
            authorization: 'Bearer c9da47d8f9bf16af86e325adc1e191ffa6f535f3',
            'client-uuid': '3T3iVH_DKKSHlbD9dETTvZTqUApkxNKMdlY-b0z',
            'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'content-type':
                'multipart/form-data; boundary=----WebKitFormBoundarylgQY9Tli7bNsE3LG',
            origin: 'http://localhost:3001',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'http://localhost:3001/',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        body: {
            user:
                '{"firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","password":"ezrkezlrkezrlmzek","hasAcceptedMails":true,"captcha":"03AGdBq24FhhL7ma6BDSXC75oSQ3_uKKSYSID3XJyoPQCkwUkkvnZqrEqShLhqus2RMpWWDHq3wXHTXm5qmA9x7mZQup0XYYN9bHj_sFH_i-EmSXfnaH5C3QwImPUd_o-E3f8Zfd6mCIPe98O9_qDHNM-GJ387Fgajj5PbFZZuj4QG2iTPeEM1IoaQdO3Zn-XmMYqU3YU18O3rMMfpLiVtk7i2k8zLPpFHiDp3US3Tc91fr0ot2xUYOGTPwM58LgnWrX31X-oezUEk8EagkPD2IAwgh0vu55DHE7HOSaARFatfeoUgNwgVTnsRmfhN1gGnxGIUKG8iklaVEYG34Vg4CZ800uxQIUALLGdbNnFV5Pwxkf4XiaOiKY-XUXoTBNu_THbbNES08Itj2N_Qj7BhTG8mvVV3sjVsS0iVHkGxnssuRZaFbZ6JciD6QJG8cB1fksMYf5_CBCil"}',
        },
    },
    response: {
        headers: {
            'x-powered-by': 'Express',
            'access-control-allow-origin': 'http://localhost:3001',
            vary: 'Origin',
            'access-control-allow-credentials': 'true',
            'access-control-expose-headers': 'jwtToken',
            'content-type': 'application/json; charset=utf-8',
            'content-length': '229',
            etag: 'W/"e5-L2Zax/+Z+lIbnuvKRq1seHacyG8"',
        },
        body:
            '{"success":true,"message":{"user":{"_id":"5fb3a5ae5be2f60fc786d90b","firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","hasAcceptedMails":true,"picture":{"id":"5fb3a5ae5be2f60fc786d90d","name":"_ Img-2.png"}}}}',
        status: 200,
    },
};

const incorrectData = {
    url: 'http://localhost:3000/user',
    request: {
        headers: {
            host: 'localhost:3000',
            connection: 'keep-alive',
            'content-length': '417873',
            accept: 'application/json, text/plain, */*',
            authorization: 'Bearer c9da47d8f9bf16af86e325adc1e191ffa6f535f3',
            'client-uuid': '3T3iVH_DKKSHlbD9dETTvZTqUApkxNKMdlY-b0z',
            'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'content-type':
                'multipart/form-data; boundary=----WebKitFormBoundarylgQY9Tli7bNsE3LG',
            origin: 'http://localhost:3001',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'http://localhost:3001/',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        body: {
            user:
                '{"firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","password":"ezrkezlrkezrlmzek","hasAcceptedMails":true,"captcha":"03AGdBq24FhhL7ma6BDSXC75oSQ3_uKKSYSID3XJyoPQCkwUkkvnZqrEqShLhqus2RMpWWDHq3wXHTXm5qmA9x7mZQup0XYYN9bHj_sFH_i-EmSXfnaH5C3QwImPUd_o-E3f8Zfd6mCIPe98O9_qDHNM-GJ387Fgajj5PbFZZuj4QG2iTPeEM1IoaQdO3Zn-XmMYqU3YU18O3rMMfpLiVtk7i2k8zLPpFHiDp3US3Tc91fr0ot2xUYOGTPwM58LgnWrX31X-oezUEk8EagkPD2IAwgh0vu55DHE7HOSaARFatfeoUgNwgVTnsRmfhN1gGnxGIUKG8iklaVEYG34Vg4CZ800uxQIUALLGdbNnFV5Pwxkf4XiaOiKY-XUXoTBNu_THbbNES08Itj2N_Qj7BhTG8mvVV3sjVsS0iVHkGxnssuRZaFbZ6JciD6QJG8cB1fksMYf5_CBCil"}',
        },
    },
    response: {
        headers: {
            'x-powered-by': 'Express',
            'access-control-allow-origin': 'http://localhost:3001',
            vary: 'Origin',
            'access-control-allow-credentials': 'true',
            'access-control-expose-headers': 'jwtToken',
            'content-type': 'application/json; charset=utf-8',
            'content-length': '229',
            etag: 'W/"e5-L2Zax/+Z+lIbnuvKRq1seHacyG8"',
        },
        body:
            '{"success":true,"message":{"user":{"_id":"5fb3a5ae5be2f60fc786d90b","firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","hasAcceptedMails":true,"picture":{"id":"5fb3a5ae5be2f60fc786d90d","name":"_ Img-2.png"}}}}',
        status: 200,
    },
};

const overweightedData = {
    url: 'http://localhost:3000/user',
    method: 'POST',
    request: {
        headers: {
            host: 'localhost:3000',
            connection: 'keep-alive',
            'content-length': '417873',
            accept: 'application/json, text/plain, */*',
            authorization: 'Bearer c9da47d8f9bf16af86e325adc1e191ffa6f535f3',
            'client-uuid': '3T3iVH_DKKSHlbD9dETTvZTqUApkxNKMdlY-b0z',
            'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'content-type':
                'multipart/form-data; boundary=----WebKitFormBoundarylgQY9Tli7bNsE3LG',
            origin: 'http://localhost:3001',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'http://localhost:3001/',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        body: {
            user: createOverweight(),
        },
    },
    response: {
        headers: {
            'x-powered-by': 'Express',
            'access-control-allow-origin': 'http://localhost:3001',
            vary: 'Origin',
            'access-control-allow-credentials': 'true',
            'access-control-expose-headers': 'jwtToken',
            'content-type': 'application/json; charset=utf-8',
            'content-length': '229',
            etag: 'W/"e5-L2Zax/+Z+lIbnuvKRq1seHacyG8"',
        },
        body:
            '{"success":true,"message":{"user":{"_id":"5fb3a5ae5be2f60fc786d90b","firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","hasAcceptedMails":true,"picture":{"id":"5fb3a5ae5be2f60fc786d90d","name":"_ Img-2.png"}}}}',
        status: 200,
    },
};

const nonValidUrlData = {
    url: 'AfakeUrlWhosGonnaMiss',
    method: 'POST',
    request: {
        headers: {
            host: 'localhost:3000',
            connection: 'keep-alive',
            'content-length': '417873',
            accept: 'application/json, text/plain, */*',
            authorization: 'Bearer c9da47d8f9bf16af86e325adc1e191ffa6f535f3',
            'client-uuid': '3T3iVH_DKKSHlbD9dETTvZTqUApkxNKMdlY-b0z',
            'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'content-type':
                'multipart/form-data; boundary=----WebKitFormBoundarylgQY9Tli7bNsE3LG',
            origin: 'http://localhost:3001',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'http://localhost:3001/',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        body: {
            user:
                '{"firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","password":"ezrkezlrkezrlmzek","hasAcceptedMails":true,"captcha":"03AGdBq24FhhL7ma6BDSXC75oSQ3_uKKSYSID3XJyoPQCkwUkkvnZqrEqShLhqus2RMpWWDHq3wXHTXm5qmA9x7mZQup0XYYN9bHj_sFH_i-EmSXfnaH5C3QwImPUd_o-E3f8Zfd6mCIPe98O9_qDHNM-GJ387Fgajj5PbFZZuj4QG2iTPeEM1IoaQdO3Zn-XmMYqU3YU18O3rMMfpLiVtk7i2k8zLPpFHiDp3US3Tc91fr0ot2xUYOGTPwM58LgnWrX31X-oezUEk8EagkPD2IAwgh0vu55DHE7HOSaARFatfeoUgNwgVTnsRmfhN1gGnxGIUKG8iklaVEYG34Vg4CZ800uxQIUALLGdbNnFV5Pwxkf4XiaOiKY-XUXoTBNu_THbbNES08Itj2N_Qj7BhTG8mvVV3sjVsS0iVHkGxnssuRZaFbZ6JciD6QJG8cB1fksMYf5_CBCil"}',
        },
    },
    response: {
        headers: {
            'x-powered-by': 'Express',
            'access-control-allow-origin': 'http://localhost:3001',
            vary: 'Origin',
            'access-control-allow-credentials': 'true',
            'access-control-expose-headers': 'jwtToken',
            'content-type': 'application/json; charset=utf-8',
            'content-length': '229',
            etag: 'W/"e5-L2Zax/+Z+lIbnuvKRq1seHacyG8"',
        },
        body:
            '{"success":true,"message":{"user":{"_id":"5fb3a5ae5be2f60fc786d90b","firstName":"apekrzark","name":"ozkeropazk","email":"zeoazk@zeork.fr","hasAcceptedMails":true,"picture":{"id":"5fb3a5ae5be2f60fc786d90d","name":"_ Img-2.png"}}}}',
        status: 200,
    },
};

afterAll(() => {
    app.close();
});

describe('Testing endpoints', () => {
    test('Send correct data', async () => {
        await request(app)
            .post('/')
            .send({ data: connectorData })
            .expect(200)
            .expect((r) => {
                const { bullet } = r.body;
                expect(bullet).toMatchObject(connectorData);
            });
    });

    it('Send incorrect data - Joi must throw error as method is missing', async () => {
        await request(app)
            .post('/')
            .send({ data: incorrectData })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain('\\"method\\" is required');
            });
    });

    it('Send an overweighted body - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: overweightedData })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain(
                    '\\"request.body\\" failed custom validation because your body is too heavy, max 100Ko"',
                );
            });
    });

    it('Send a fake url - Joi must throw error', async () => {
        await request(app)
            .post('/')
            .send({ data: nonValidUrlData })
            .expect(400)
            .expect((r: HTTPError) => {
                expect(r.error.text).toContain(
                    '"\\"url\\" with value \\"AfakeUrlWhosGonnaMiss\\" fails to match the required pattern',
                );
            });
    });
});