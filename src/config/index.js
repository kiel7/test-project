import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound || envFound.error) {
  throw new Error("Couldn't find .env file");

}


export default {
    port: parseInt(process.env.PORT, 10) || 3000,
    
    jwtSecret: process.env.JWT_SECRET,

    database: {
        host: process.env.laragonHost,
        user: process.env.laragonUser,
        password: process.env.laragonPassword,
        port: parseInt(process.env.laragonPort) || 3308,
        database: process.env.laragonDatabase,

        
  }
};