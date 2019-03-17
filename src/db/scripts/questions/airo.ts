import * as mongodb from "pow-mongodb-fixtures";
import { airoDatabaseID } from "../databases/mongo_airo";
import { getMongoID } from "../../../helper/crypto";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);
const questions = [
  {
    _id: getMongoID(),
    question: "Вывести названия всеx авиакомпаний",
    database: airoDatabaseID,
    answer: "Select name from company",
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести имена всех когда-либо пассажиров авакомпаний",
    database: airoDatabaseID,
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
    if (!err) return console.log("Airo question successfully created");
    throw new Error(err);
  }
);

export default questions;
