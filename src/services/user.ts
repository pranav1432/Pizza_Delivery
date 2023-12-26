import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import { UserData } from "../types/user";
import { Response } from "express";

export class UserService{
    
    
    constructor(private userRepository:Repository<User>){
       
        this.userRepository=userRepository;

    }
 
   async create({firstName,lastName,email,password}:UserData){

        // const userRepository=AppDataSource.getRepository(User);

        await this.userRepository.save({firstName,lastName,email,password});

    }
   


}