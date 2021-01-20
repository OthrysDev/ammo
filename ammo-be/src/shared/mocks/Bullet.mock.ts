import Bullet from 'shared/types/Bullet';

// =============================== HTTP FRAGMENT MOCKS =======================================

const REQUEST_HEADERS = {
    host: 'localhost:3000',
    connection: 'keep-alive',
    'content-length': '417873',
    accept: 'application/json, text/plain, */*',
    authorization: 'Bearer c9da47d8f9bf16af86e896adc1e191ffa6f535f3',
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
};

const RESPONSE_HEADERS = {
    'x-powered-by': 'Express',
    'access-control-allow-origin': 'http://localhost:3001',
    vary: 'Origin',
    'access-control-allow-credentials': 'true',
    'access-control-expose-headers': 'jwtToken',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '229',
    etag: 'W/"e5-L2Zax/+Z+lIbnuvKRq1seHacyG8"',
};

const REQUEST_BODY =
    '{ user: {"firstName":"Foo","name":"Bar","email":"foo.bar@mail.com","password":"123456789","captcha":"03AGdBq24FhhL7ma6BDSXC75oSQ3_uKKSYSID3XJyoPQCkwUkkvnZqrEqShLhqus2RMpWWDHq3wXHTXm5qmA9x7mZQup0XYYN9bHj_sFH_i-EmSXfnaH5C3QwImPUd_o-E3f8Zfd6mCIPe98O9_qDHNM-GJ387Fgajj5PbFZZuj4QG2iTPeEM1IoaQdO3Zn-XmMYqU3YU18O3rMMfpLiVtk7i2k8zLPpFHiDp3US3Tc91fr0ot2xUYOGTPwM58LgnWrX31X-oezUEk8EagkPD2IAwgh0vu55DHE7HOSaARFatfeoUgNwgVTnsRmfhN1gGnxGIUKG8iklaVEYG34Vg4CZ800uxQIUALLGdbNnFV5Pwxkf4XiaOiKY-XUXoTBNu_THbbNES08Itj2N_Qj7BhTG8mvVV3sjVsS0iVHkGxnssuRZaFbZ6JciD6QJG8cB1fksMYf5_CBCil"}}';

const RESPONSE_BODY =
    '{"success":true,"message":{"user":{"_id":"5fb3a5ae5be2f60fc786d90b","firstName":"Foo","name":"Bar","email":"foo.bar@mail.com"}}}';

const REQUEST = {
    headers: REQUEST_HEADERS,
    body: REQUEST_BODY,
};

const RESPONSE = {
    headers: RESPONSE_HEADERS,
    body: RESPONSE_BODY,
    status: 200,
};

// =============================== BULLET MOCKS =======================================

const bulletMock: Bullet = {
    id: '1',
    date: new Date('2020-10-10 10:00:00'),
    url: 'http://localhost:3000/user',
    method: 'POST',
    request: REQUEST,
    response: RESPONSE,
};

const minimalBulletMock: Bullet = {
    id: '1',
    date: new Date('2020-10-10 10:00:00'),
    url: 'http://localhost:3000/user',
    method: 'POST',
    request: {
        headers: REQUEST_HEADERS,
        // No body
    },
    response: {
        headers: RESPONSE_HEADERS,
        // No body
        // No status
    },
};

export { bulletMock, minimalBulletMock };
