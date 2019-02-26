import * as mongodb from "pow-mongodb-fixtures";
import { getMongoID } from "../../../helper/crypto";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);
const users = [
  {
    _id: getMongoID(),
    email: "admin",
    role: "admin"
  }
];

fixtures.clearAndLoad(
  {
    users
  },
  err => {
    if (!err) return console.log("Admin successfully created");
    throw new Error(err);
  }
);

export { users as admins };
