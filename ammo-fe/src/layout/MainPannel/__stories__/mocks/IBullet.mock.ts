import IBullet from 'imported/IBullet';

const generateMockBullet = (index: number) => {
    const mockBullet: IBullet = {
        url: `http://localhost/foo/${index}`,
        method: 'GET',
        date: new Date(`2020-10-10 10:00:00${index}`),
        request: {
            headers: {
                requestHeader1: 'requestHeader1 value',
                requestHeader2: 'requestHeader2 value',
            },
            body: "{requestKey: 'requestValue'}",
        },
        response: {
            headers: {
                responseHeader1: 'responseHeader1 value',
                responseHeader2: 'responseHeader2 value',
            },
            body: "{responseKey: 'responseValue'}",
        },
    };

    return mockBullet;
};

const generateMockBullets = (index: number) => {
    const mockBullets = [];
    for (let i = 0; i < index; i++) mockBullets.push(generateMockBullet(i));
    return mockBullets;
};

export { generateMockBullet, generateMockBullets };
