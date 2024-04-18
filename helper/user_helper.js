import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/v2/');
import { faker } from '@faker-js/faker';
import 'dotenv/config'

const TOKEN = process.env.USER_TOKEN;

let bodyData;


export const createRandomUsersWithFaker = () => {
  return bodyData = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      gender: 'male',
      status: 'active',
    };
};

export const newName = ()=>{
  return faker.person.firstName()
};

export const newEmail = ()=>{
  return faker.internet.email()
};
