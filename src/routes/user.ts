import express from 'express';
import { AuthController } from '../controller/user';

const UserRouter=express.Router();
const authController=new AuthController();

UserRouter.post('/register',(req,res)=>authController.register(req,res));


export default UserRouter;