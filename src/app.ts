import express from 'express';
import UserRouter from './routes/user';
import 'reflect-metadata';

const app = express();

app.use(express.json());

app.use('/auth', UserRouter);

export default app;
