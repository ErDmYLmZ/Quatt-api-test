import request from '../config/commonConfig.js';
import 'dotenv/config'
import { createRandomUsersWithFaker, newEmail, newName } from '../helper/user_helper.js';

const TOKEN = process.env.USER_TOKEN;

describe('Users', () => {
    let userId;


    describe('POST -Create a new user', () => {
        it('/users', async () => {
            const bodyData = createRandomUsersWithFaker();

            const postResponse = await request
                .post('users')
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(bodyData);

            expect(postResponse.body).toMatchObject(bodyData);
            userId = postResponse.body.id;
            console.log(postResponse.body);

        });

    });


    describe('GET -Get the created user', () => {
        it('/users/:id', async () => {
            const getResponse = await request
                .get(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`);

            console.log(getResponse.body);
            expect(getResponse.status).toBe(200);
            expect(getResponse.body.id).toEqual(userId);

        });
    });


    describe('PUT -Update the created user', () => {
        it('users/:id', async () => {
            const putBody = {
                name: newName(),
                email: newEmail(),
                gender: 'female',
                status: 'inactive',

            };

            const putResponse = await request
                .put(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(putBody)
            console.log(putResponse.body);
            expect(putResponse.body).toMatchObject(putBody);
        });
    });


    describe('PATCH -Partially update the created user', () => {
        it('users/:id', async () => {
            const patchBody = {
                email: newEmail(),
            };

            const patchResponse = await request
                .patch(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(patchBody)
            console.log(patchResponse.body);
            expect(patchResponse.body).toMatchObject(patchBody);
        });
    });


    describe('DELETE -Delete the created user', () => {
        it('/users/:id', async () => {
            const deleteResponse = await request
                .delete(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)

            console.log(deleteResponse.body);
            expect(deleteResponse.status).toBe(204);
            expect(deleteResponse.body).toMatchObject({});

        });
    });
});
