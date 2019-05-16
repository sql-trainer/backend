import { questions as airo } from './airo';
import { questions as family } from './family';
import * as mongodb from 'pow-mongodb-fixtures';

const dbName = process.env.MONGO_DATABASE;
const host = process.env.MONGO_HOST;
const fixtures = mongodb.connect(dbName, { host });

fixtures.clearAndLoad(
    {
        questions: [...airo, ...family],
    },
    err => {
        if (!err) return console.log('Airo and Family questions successfully created');
        throw new Error(err);
    },
);

export { airo, family };
