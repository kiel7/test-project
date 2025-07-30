import * as express from 'express';
import loadersApp from './loadersApp.js';
import config from './config/index.js';

async function main() {
    const app = express.default();
   
 
    await loadersApp(app);

    app.get('/', (req, res) => {
        res.send('Welcome to the Express Server!');
    });

    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
}

main();
