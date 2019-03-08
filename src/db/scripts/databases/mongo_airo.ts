import * as mongodb from "pow-mongodb-fixtures";

const dbName = process.env.MONGO_DATABASE;
const fixtures = mongodb.connect(dbName);
const airoDatabaseID = mongodb.createObjectId("4ed2b809d7446b9a0e000014");

fixtures.clearAndLoad({
  databases: [
    {
      _id: airoDatabaseID,
      name: "Airo",
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
              type: "INT",
              relation: {
                table: "Trip",
                type: "ONE_TO_MANY"
              }
            },
            {
              isKey: false,
              key: "date",
              type: "DATETIME"
            },
            {
              isKey: false,
              key: "passenger",
              type: "INT",
              relation: {
                table: "Passenger",
                type: "ONE_TO_MANY"
              }
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
              type: "INT",
              relation: {
                table: "Company",
                type: "ONE_TO_MANY"
              }
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
      active: true,
      open: true
    }
  ]
});

export { airoDatabaseID };