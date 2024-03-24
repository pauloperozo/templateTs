/*
  run test: npx jest index.router.spec.js
*/
require('dotenv').config();
const axios = require('axios');

/*Var */
let client = axios.create({
  'baseURL': `http://localhost:${ process.env.PORT || 3000 }`,
  'headers': { 'Content-Type': 'application/json' },
  'timeout': 3000
});


describe('Router Test.', () => {

  test('Should Load Enviroment ( .env )', async () => {

    expect(process.env.NAME).toBeDefined();

  });

  test('Should Service Online', async () => {

    const response = await client.get('/welcome');
    expect(response.status).toBe(200);

  });

  test('Should  SignUp', async () => {

    const randId  = Math.floor( Math.random() * 1000 )

    const body = {
      "email": `default${randId}@gmail.com`,
      "password": `password${randId}`
    };

    const response = await client.post('/auth/signup', body);
    const { message } = response.data;

    expect(response.status).toBe(200);
    expect(message).toBeDefined();
  
  });

  test('Should  SignIn', async () => {

    const body = {
      "email": "pauloperozo@gmail.com",
      "password": "123"
    };

    const response = await client.post('/auth/signin', body);
    const { message, token } = response.data;

    expect(response.status).toBe(200);
    expect(message).toBeDefined();
    expect(token).toBeDefined();

  });

});
