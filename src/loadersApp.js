import express from 'express';
import loaders from './loaders/database.js';
import router from './routes/users.js';
import config from './config/index.js';

const app = express();

export default async function loadersApp() {
    
    await loaders(app);
    app.use(express.json());
    app.use(router);  

    return app;
}