import mongodb from 'pow-mongodb-fixtures';
import env from 'dotenv';

import { airo } from './mongo_airo';
import { family } from './mongo_family';

env.config();
const dbName = process.env.MONGO_DATABASE;
const host = process.env.MONGO_HOST;
const fixtures = mongodb.connect(dbName, { host });

fixtures.clearAndLoad({
    databases: [airo, family],
});
