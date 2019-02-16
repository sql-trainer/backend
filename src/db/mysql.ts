import * as mysql from "mysql";

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASS;

const sql = mysql.createConnection({
  host,
  user,
  password,
  multipleStatements: true
});

sql.connect(err => {
  if (!err) {
    console.log("MySQL successfully connected");
  } else {
    console.log(err);
  }
});

export { sql };
