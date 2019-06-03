import Mongoose from 'mongoose';
import env from 'dotenv';
env.config();

const host = process.env.MONGO_HOST;
const database = process.env.MONGO_DATABASE;

Mongoose.connect(`mongodb://${host}/${database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const mongodb = Mongoose.connection;

mongodb.on('error', err => {
    console.log(err);
});

mongodb.on('open', () => {
    console.log('MongoDB successful connected');
});

export { mongodb };
