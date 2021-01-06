import app from 'index';
import request from 'supertest';

afterAll(() => {
    app.close();
});

describe('VersionRouter', () => {
    describe('get("/")', () => {
        test('Get version - should return version', async () => {
            await request(app)
                .get('/version')
                .expect(200)
                .expect((r) => {
                    expect(r.body).toMatchSnapshot();
                });
        });
    });
});
