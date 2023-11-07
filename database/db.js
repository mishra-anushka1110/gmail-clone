import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-kfh6uip-shard-00-00.bsxtonl.mongodb.net:27017,ac-kfh6uip-shard-00-01.bsxtonl.mongodb.net:27017,ac-kfh6uip-shard-00-02.bsxtonl.mongodb.net:27017/?ssl=true&replicaSet=atlas-lxmmkq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       mongoose.connect(DB_URI, { useNewUrlParser: true });
       console.log('Database Connected Successfully');
    } catch(error){
        console.log('Error while connecting to database', error.message);
    }
}

export default Connection;
