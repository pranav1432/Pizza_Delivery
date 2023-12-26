import { Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/User';
import { UserRequest } from '../types/user';
import { UserService } from '../services/user';


export class AuthController {

    userService:UserService;
    constructor(userService:UserService){
        this.userService=userService;
    }

    async register(req: UserRequest, res: Response) {


        const {firstName,lastName,email,password}=req.body;

        
        // const userservice=new UserService();

        await this.userService.create({firstName,lastName,email,password});
  
        
        res.status(201).json();
    }
}

