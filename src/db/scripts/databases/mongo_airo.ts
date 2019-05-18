import * as mongodb from 'pow-mongodb-fixtures';

const airoDatabaseID = mongodb.createObjectId('4ed2b809d7446b9a0e000014');

const airo = {
    _id: airoDatabaseID,
    name: 'Airo',
    title: 'Аэроперелеты',
    description: 'Схема авиаперелетов, связующая пассажиров и компании с авиа билетами',
    tables: [
        {
            title: 'Company',
            description: 'Компании, осуществляющие авиаперелеты',
            props: [
                {
                    isKey: true,
                    name: 'id',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'name',
                    type: 'VARCHAR',
                },
            ],
        },
        {
            title: 'Passenger',
            description: 'Пассажиры, купившие билет',
            props: [
                {
                    isKey: true,
                    name: 'id',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'name',
                    type: 'VARCHAR',
                },
            ],
        },
        {
            title: 'Pass_in_trip',
            description: 'Таблица, связующая купленные билеты с пассажирами',
            props: [
                {
                    isKey: true,
                    name: 'id',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'trip',
                    type: 'INT',
                    relation: {
                        table: 'Trip',
                        type: 'ONE_TO_MANY',
                    },
                },
                {
                    isKey: false,
                    name: 'passenger',
                    type: 'INT',
                    relation: {
                        table: 'Passenger',
                        type: 'ONE_TO_MANY',
                    },
                },
                {
                    isKey: false,
                    name: 'place',
                    type: 'VARCHAR',
                },
            ],
        },
        {
            title: 'Trip',
            description: 'Купленные билеты',
            props: [
                {
                    isKey: true,
                    name: 'id',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'company',
                    type: 'INT',
                    relation: {
                        table: 'Company',
                        type: 'ONE_TO_MANY',
                    },
                },
                {
                    isKey: false,
                    name: 'plane',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'town_from',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'town_to',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'time_out',
                    type: 'DATETIME',
                },
                {
                    isKey: false,
                    name: 'time_in',
                    type: 'DATETIME',
                },
            ],
        },
    ],
    active: true,
    open: true,
};

export { airoDatabaseID, airo };
