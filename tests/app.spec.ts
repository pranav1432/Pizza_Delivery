import app from "../src/app";
// import { sum } from "../src/utils";
import request from 'supertest';

describe("post request",()=>{


    describe("Given All field",()=>{

it("Api should work",async()=>{

    const user={
        name:'pranav',
        email:'adi@gmail.com',
        password:'12323'
    };

    const result =await request(app).post('/auth/register').send(user);

     expect(result.statusCode).toBe(200);

});

it("valid json response",async()=>{

    const user={
        name:'pranav',
        email:'adi@gmail.com',
        password:'12323'
    };

    const response =await request(app).post('/auth/register').send(user);

     expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));


});

});

    describe("field missing",()=>{




    });

 

});