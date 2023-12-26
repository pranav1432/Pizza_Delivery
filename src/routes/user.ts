import express from 'express';
import { AuthController } from '../controller/user';
import { UserService } from '../services/user';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/User';


const UserRouter = express.Router();

const userRepository=AppDataSource.getRepository(User);
const userService=new UserService(userRepository);
const authController = new AuthController(userService);

UserRouter.post('/register', (req, res) => authController.register(req, res));

export default UserRouter;
