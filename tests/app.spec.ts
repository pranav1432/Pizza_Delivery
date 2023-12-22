import { DataSource } from 'typeorm';
import app from '../src/app';
// import { sum } from "../src/utils";
import request from 'supertest';
import { AppDataSource } from '../src/config/data-source';
import { truncateTable } from './utils';
import { User } from '../src/entity/User';

describe('User Post Request', () => {
    describe('Given All field', () => {

        let connection:DataSource;

        beforeAll(async()=>{


            connection=await AppDataSource.initialize();


        });

        beforeEach(async()=>{

              await truncateTable(connection);
        });

        afterAll(async()=>{


            await connection.destroy();
            

        });




        it('Api should work', async () => {
            const user = {
                firstName: 'pranav',
                lastName: 'purohit',
                email: 'adi@gmail.com',
                password: '12323',
            };

            const result = await request(app).post('/auth/register').send(user);

            expect(result.statusCode).toBe(201);
        });

        it('valid json response', async () => {
            const user = {
                firstName: 'pranav',
                lastName: 'purohit',
                email: 'adi@gmail.com',
                password: '12323',
            };

            const response = await request(app)
                .post('/auth/register')
                .send(user);

            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            );
        });


        it('should persist user data in database',async()=>{

            //arrange

            const user = {
                firstName: 'pranav',
                lastName: 'purohit',
                email: 'adi@gmail.com',
                password: '12323',
            };

            //act

              await request(app)
                .post('/auth/register')
                .send(user);

            
                //assert

             const userRepository=connection.getRepository(User);

             const users=await userRepository.find();

             expect(users).toHaveLength(1);

            
        });
    });

    describe('field missing', () => {});
});
