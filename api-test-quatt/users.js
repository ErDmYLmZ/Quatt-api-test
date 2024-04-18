// import supertest from 'supertest';
// const request = supertest('https://gorest.co.in/public/v2/');
// import { expect } from 'chai';
// import { it } from 'mocha';

// const TOKEN = '8e1826a2a1d143cc2044703818e93e3b894e217674acfbf2fea7ab39fd4df366';

// describe('Users',()=>{
//     it('GET /users', () => {
//        return request.get(`users?access-token=${TOKEN}`).then((res) => {
//             expect(res.body).to.not.be.empty;
//         });
//     });

//     it('GET /users/:id', () => {
//         return request.get(`users/6821483?access-token=${TOKEN}`).then((response) => {
//              expect(response.body.id).to.be.equal(6821483);
//          });
//     });

//     it('GET /users with filter', () => {
//         const url = `users?access-token=${TOKEN}&page=1&per_page=20&status=active&gender=male`;
//         return request.get(url).then((res) => {
//             expect(res.body).to.not.be.empty;
//             res.body.forEach((data) => {
//             expect(data.gender).to.eq('male');
//             expect(data.status).to.eq('active');
//              });
//          });
//     });

//     it('POST /users', () => {
//         const bodyData = {
//           email: `test-${Math.floor(Math.random() * 9999)}@testmail.com`,
//           name: 'Test name',
//           gender: 'male',
//           status: 'inactive',
//         };
    
//         return request
//         .post('users')
//         .set('Authorization',`Bearer ${TOKEN}`)
//         .send(bodyData)
//         .then((res) =>{
//             expect(res.body).to.deep.include(bodyData);
            
//         })
//     })

//     it('PUT /users/id' , ()=> {
//         const putBody = {
//             status: 'active',
//             name : `Quatt_${Math.floor(Math.random() * 999)}`
//         }
//         return request
//         .put('users/6826971')
//         .set('Authorization',`Bearer ${TOKEN}`)
//         .send(putBody)
//         .then((res)=>{
//             expect(res.body).to.deep.include(putBody);
//         })
//     })
// });
