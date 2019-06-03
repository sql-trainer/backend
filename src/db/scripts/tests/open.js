import mongodb from 'pow-mongodb-fixtures';
import { airo, family } from '../questions';
import { admins } from '../users';

const dbName = process.env.MONGO_DATABASE;
const host = process.env.MONGO_HOST;
const fixtures = mongodb.connect(dbName, { host });

fixtures.clearAndLoad(
    {
        tests: [
            {
                title: 'Open',
                description: 'Подготовленый тест администраторами для ваших тренировок навыков SQL',
                author: admins[0],
                questions: [...airo.map(question => question._id), ...family.map(question => question._id)],
                active: true,
                open: true,
                date_changed: new Date(),
            },
        ],
    },
    err => {
        if (!err) return console.log('Open test successfully created');
        throw new Error(err);
    },
);
