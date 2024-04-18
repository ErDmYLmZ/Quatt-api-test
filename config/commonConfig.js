import supertest from 'supertest';
import testUrl from '../config/testUrl.js';
const request = supertest(testUrl.baseUrl);

export default request;
