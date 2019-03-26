import * as mongodb from 'pow-mongodb-fixtures';
import { airoDatabaseID } from '../databases/mongo_airo';
import { getMongoID } from '../../../helper/crypto';

const dbName = process.env.MONGO_DATABASE;
const host = process.env.MONGO_HOST;
const fixtures = mongodb.connect(dbName, { host });
const questions = [
    {
        _id: getMongoID(),
        question: 'Вывести названия всеx авиакомпаний',
        database: airoDatabaseID,
        answer: 'Select name from company',
        fields: ['name'],
        weight: 0.1,
        active: true,
        open: true,
    },
    {
        _id: getMongoID(),
        question: 'Вывести имена всех когда-либо обслуживаемых пассажиров авакомпаний',
        database: airoDatabaseID,
        answer: 'Select name from passenger',
        fields: ['name'],
        weight: 0.1,
        active: true,
        open: true,
    },
];

fixtures.clearAndLoad(
    {
        questions,
    },
    err => {
        if (!err) return console.log('Airo question successfully created');
        throw new Error(err);
    },
);

export default questions;
