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
    fields: ["name"],
    weight: 0.1,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести имена всех когда-либо обслуживаемых пассажиров авакомпаний",
    database: airoDatabaseID,
    answer: "Select name from passenger",
    fields: ["name"],
    weight: 0.1,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести все рейсы (trip), совершенные из Москвы",
    database: airoDatabaseID,
    answer: "Select * from airo.trip where town_from='Moscow'",
    fields: ["*"],
    weight: 0.2,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести количество рейсов, совершенных на TU-134",
    database: airoDatabaseID,
    answer: "Select count(*) from airo.trip where plane='TU-134'",
    fields: ["count(*)"],
    weight: 0.25,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Какие компании совершали перелеты на Boeing",
    database: airoDatabaseID,
    answer: "Select distinct name from company, trip where trip.company=company.id AND trip.plane='Boeing'",
    fields: ["name"],
    weight: 0.4,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Какая компания организует перелеты с Владивостока (Vladivostok)",
    database: airoDatabaseID,
    answer: "SELECT name FROM trip, company WHERE trip.company=company.id AND trip.town_from='Vladivostok'",
    fields: ["name"],
    weight: 0.4,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести вылеты, совершенные с 10 ч. по 14 ч. 1 января 1900 г.",
    database: airoDatabaseID,
    answer: "SELECT * FROM trip WHERE trip.time_out BETWEEN '1900-01-01 10:00:00' AND '1900-01-01 14:00:00'",
    fields: ["*"],
    weight: 0.45,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "В какие города летал Bruce Willis",
    database: airoDatabaseID,
    answer: "SELECT distinct trip.town_to FROM pass_in_trip, passenger, trip where pass_in_trip.passenger=passenger.id AND pass_in_trip.trip=trip.id AND passenger.name='Bruce Willis'",
    fields: ["town_to"],
    weight: 0.65,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Во сколько Стив Мартин (Steve Martin) прилетел в Лондон (London)",
    database: airoDatabaseID,
    answer: "SELECT time_in from trip, passenger, pass_in_trip where pass_in_trip.trip=trip.id AND pass_in_trip.passenger=passenger.id AND passenger.name='Steve Martin' AND trip.town_to='London'",
    fields: ["time_in"],
    weight: 0.65,
    active: true,
    open: true
  },
  {
    _id: getMongoID(),
    question: "Вывести отсортированный (по убыванию) список пассажиров по количеству перелетов",
    database: airoDatabaseID,
    answer: "SELECT name, count(*) FROM passenger, trip, pass_in_trip WHERE pass_in_trip.passenger=passenger.id AND pass_in_trip.trip=trip.id GROUP BY passenger.name ORDER BY count(*) DESC",
    fields: ["name, count(*)"],
    weight: 0.7,
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
