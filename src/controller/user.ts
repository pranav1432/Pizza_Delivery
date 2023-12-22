import { Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/User';
import { UserRequest } from '../types/user';


export class AuthController {


    async register(req: UserRequest, res: Response) {


        const {firstName,lastName,email,password}=req.body;


        const userRepository=AppDataSource.getRepository(User);

        await userRepository.save({firstName,lastName,email,password});



        res.status(201).json();
    }
}

