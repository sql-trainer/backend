import * as mongodb from "pow-mongodb-fixtures";
import { aero } from "../questions";
import { admins } from "../users";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);

fixtures.clearAndLoad(
  {
    tests: [
      {
        title: "Открытый тест",
        description:
          "Подготовленый тест администраторами для ваших тренировок навыков SQL",
        author: admins[0],
        questions: [...aero.map(question => question._id)],
        active: true,
        open: true
      }
    ]
  },
  err => {
    if (!err) return console.log("Open test successfully created");
    throw new Error(err);
  }
);
