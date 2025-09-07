import mongoose from 'mongoose';
import config from '../config/index.js';

export default async (app) => {
/*mongoose
    .connect(config.database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    }); */
    try {
        await mongoose.connect(config.database.url);
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });
        
        
    } catch (error) {
        handleError(error);
        console.error('Error connecting to the database:', error);
    }

   /* mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
        console.log('MongoDB reconnected');
    });
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
    */
    
}
