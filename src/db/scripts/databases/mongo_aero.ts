import Database from "../../../models/database";
import * as mongodb from "pow-mongodb-fixtures";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);

fixtures.load({
  database: [
    {
      title: "Аэроперелеты",
      description:
        "Схема авиаперелетов, связующая пассажиров и компании с авиа билетами",
      tables: [
        {
          title: "Company",
          description: "Компании, осуществляющие авиаперелеты",
          props: [
            {
              isKey: true,
              key: "id",
              type: "INT"
            },
            {
              isKey: false,
              key: "name",
              type: "VARCHAR"
            }
          ]
        },
        {
          title: "Passenger",
          description: "Пассажиры, купившие билет",
          props: [
            {
              isKey: true,
              key: "id",
              type: "INT"
            },
            {
              isKey: false,
              key: "name",
              type: "VARCHAR"
            }
          ]
        },
        {
          title: "Pass_in_trip",
          description: "Таблица, связующая купленные билеты с пассажирами",
          props: [
            {
              isKey: true,
              key: "id",
              type: "INT"
            },
            {
              isKey: false,
              key: "trip",
              type: "INT"
            },
            {
              isKey: false,
              key: "date",
              type: "DATETIME"
            },
            {
              isKey: false,
              key: "passenger",
              type: "INT"
            },
            {
              isKey: false,
              key: "place",
              type: "VARCHAR"
            }
          ]
        },
        {
          title: "Trip",
          description: "Купленные билеты",
          props: [
            {
              isKey: true,
              key: "id",
              type: "INT"
            },
            {
              isKey: false,
              key: "company",
              type: "INT"
            },
            {
              isKey: false,
              key: "plane",
              type: "VARCHAR"
            },
            {
              isKey: false,
              key: "town_from",
              type: "VARCHAR"
            },
            {
              isKey: false,
              key: "town_to",
              type: "VARCHAR"
            },
            {
              isKey: false,
              key: "time_out",
              type: "DATETIME"
            },
            {
              isKey: false,
              key: "time_in",
              type: "DATETIME"
            }
          ]
        }
      ],
      active: true
    }
  ]
});
