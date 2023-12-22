import { Config } from './config';
import app from './app';

const start_server = () => {
    try {
        app.listen(Config.PORT, () => {
            console.log('connected');
        });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
        }
    }
};

start_server();

console.log(Config.PORT);
console.log(Config.NODE_ENV);
