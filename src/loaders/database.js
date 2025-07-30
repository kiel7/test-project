import { Sequelize } from 'sequelize';
import config from '../config/index.js';

const db = new Sequelize({
    host: config.database.host,  
    username: config.database.user,
    password: config.database.password,
    port: config.database.port,
     database: config.database.database,
     dialect : 'mysql',
});


export default async function initializeDatabase() {
  

const MAX_RETRIES = 5;
const RETRY_DELAY = 15000; 


  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      await db.authenticate();
      console.log("Database connection succesfully.");
      break;
    } catch (error) {
      retries++;
      console.error(`Coudn't connect to database. (attempt ${retries}):`, error.message);
    if (retries >= MAX_RETRIES) {
      console.error("Max retries reached. Exiting...");
      process.exit(1);
    }     
    else
     console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY)); 
    }
  }
}



  

