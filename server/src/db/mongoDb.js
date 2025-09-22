import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database conmnected ${connect.connection.host}`);
    } catch (error) {
        console.log("Error connecting mongodb:", error)
    }
}

export default connectDb;