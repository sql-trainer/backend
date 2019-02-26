import * as mongodb from "pow-mongodb-fixtures";
import { aeroDatabaseID } from "../databases/mongo_aero";
import { getMongoID } from "../../../helper/crypto";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);
const questions = [
  {
    _id: getMongoID(),
    question: "Вывести названия все авиакомпаний",
    database: aeroDatabaseID,
    answer: "Select name from company",
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести имена всех когда либо посажировок авакомпаний",
    database: aeroDatabaseID,
    answer: "Select name from passenger",
    active: true,
    open: true
  }
];

fixtures.clearAndLoad(
  {
    questions
  },
  err => {
    if (!err) return console.log("Aero question successfully created");
    throw new Error(err);
  }
);

export default questions;
