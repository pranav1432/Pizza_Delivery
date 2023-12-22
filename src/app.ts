import express from 'express';
import UserRouter from './routes/user';

const app = express();

app.use(express.json());

app.use('/auth', UserRouter);

export default app;
