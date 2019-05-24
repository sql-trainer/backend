import * as mysql from 'mysql';

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASS;

const sql = mysql.createPool({
    host,
    user,
    password,
    multipleStatements: true,
});

sql.on('connection', function(connection) {
    console.log('Created new MySQL connection');
});

const promisifyQuery = query => {
    return new Promise((resolve, reject) => {
        sql.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result[1]);
        });
    });
};

export { sql, promisifyQuery };
