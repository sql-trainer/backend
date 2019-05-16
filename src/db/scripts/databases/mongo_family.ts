import * as mongodb from 'pow-mongodb-fixtures';

const familyDatabaseID = mongodb.createObjectId('4ed2b809d7446b9a0e000015');

const family = {
    _id: familyDatabaseID,
    name: 'Family',
    title: 'Семья',
    description: 'База данных связывающая сленов семьи и их покупки',
    tables: [
        {
            title: 'Family',
            description: 'Члены семьи',
            props: [
                {
                    isKey: true,
                    name: 'id_s',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'fstatus',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'persname',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'yborn',
                    type: 'DATETIME',
                },
            ],
        },
        {
            title: 'Goods',
            description: 'Список товаров',
            props: [
                {
                    isKey: true,
                    name: 'id_g',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'gname',
                    type: 'VARCHAR',
                },
                {
                    isKey: false,
                    name: 'gtype',
                    type: 'INT',
                },
            ],
        },
        {
            title: 'GoodTypes',
            description: 'Типы товаров',
            props: [
                {
                    isKey: true,
                    name: 'id_gt',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'gtname',
                    type: 'VARCHAR',
                },
            ],
        },
        {
            title: 'Payments',
            description: 'Купленные товары',
            props: [
                {
                    isKey: true,
                    name: 'id_p',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'who',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'good',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'howmany',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'price',
                    type: 'INT',
                },
                {
                    isKey: false,
                    name: 'pdate',
                    type: 'DATETIME',
                },
            ],
        },
    ],
    active: true,
    open: true,
};

export { familyDatabaseID, family };
