// import request from '../config/commonConfig.js';
// import 'dotenv/config'
// import { faker } from '@faker-js/faker';
// import { expect } from 'chai';
// import { createRandomUsersWithFaker } from '../helper/user_helper.js';

// const TOKEN = process.env.USER_TOKEN;

// describe('Users posts',()=>{
//   let postId, userId;

//   before(async () => {
//     userId = await createRandomUsersWithFaker();
//   });

//   it('/posts', async()=>{
//         const bodyData = {
//           user_id: userId,
//           title: faker.lorem.sentence(),
//           body: faker.lorem.paragraph(),
          
//         };

//         const postRes = await request
//         .post('posts')
//         .set('Authorization',`Bearer ${TOKEN}`)
//         .send(bodyData)
        
//         expect(postRes.body).to.deep.include(bodyData);
//         postId = postRes.body.id;
//     });
    
  
//   it('GET/posts/:id', async () =>{
//     await request
//     .get(`posts/${postId}`)
//     .set('Authorization',`Bearer ${TOKEN}`)
//     .expect(200);
//   });




 

// // const {
// //     // createRandomUser,
// //     createRandomUserWithFaker,
// //   } = require('../utility/user_utility.js');

// // const TOKEN = process.env.USER_TOKEN;

// // describe.only('Posts', () => {
// //     let user, postId;
  
// //     before(async () => {
// //       // user = await createRandomUser();
// //       user = await createRandomUserWithFaker();
// //     });
  
// //     after(() => {
// //       // clean up
// //       // delete a user
// //     });
  
// //     describe('POST', () => {
// //       it('/posts', async () => {
// //         const bodyData = {
// //           user_id: user.id,
// //           title: faker.lorem.sentence(),
// //           body: faker.lorem.paragraphs(),
// //         };
  
// //         const res = await request
// //           .post('posts')
// //           .set('Authorization', `Bearer ${TOKEN}`)
// //           .send(bodyData);
  
// //         expect(res.body).to.deep.include(bodyData);
// //         postId = res.body.id;
// //       });
  
// //       // dependent on previous test
// //       it('posts/:id', async () => {
// //         if (postId) {
// //           await request
// //             .get(`posts/${postId}`)
// //             .set('Authorization', `Bearer ${TOKEN}`)
// //             .expect(200);
// //         } else {
// //           throw new Error(`postId is invalid - ${postId}`);
// //         }
// //       });
// //     });
  
//     describe('Negative Tests', () => {
     
//       it('422 Data validation failed', async () => {
//         const bodyData = {
//           user_id: userId,
//           title: 'My title'
//          };
  
//         const postRes = await request
//           .post(`posts`)
//           .set('Authorization', `Bearer ${TOKEN}`)
//           .send(bodyData);
  
//           expect(postRes.status).to.equal(422);
//           expect(postRes._body[0].message).to.eq("can't be blank");
//       });
  
//       it('401 Authentication failed', async () => {
//         const bodyData = {
//           user_id: userId,
//           title: 'My title',
//           body: 'my post body',
          
//         };
  
//         const postRes = await request
//         .post(`posts`)
//         .send(bodyData);
  
//         expect(postRes.status).to.equal(401);
//         expect(postRes._body.message).to.eq('Authentication failed');
//       });
//     });

//   });

   //     it('/users/ filters', async() => {
    //     const getRequestWithFilter = await request
    //     .get(`users`)
    //     .query({ status: 'active' , gender:'male'})
    //     .set('Authorization',`Bearer ${TOKEN}`);

    //     console.log(getRequestWithFilter.body);
    //     getRequestWithFilter.body.forEach(user =>{
    //         expect(user.gender).to.eq('male');
    //         expect(user.status).to.eq('active');

    //     });
    //     expect(getRequestWithFilter.body).not.contains(userId);
    // });