import * as mysql from "mysql";
import * as config from "config";

const host = config.get("db.host") as string;
const user = config.get("db.user") as string;
const password = config.get("db.password") as string;

class Connection {
  private dbs: {
    id: number;
    name: string;
    connection: mysql.Connection;
  }[];

  constructor() {
    // const connection = this.createConnection("sql-trener");
    // connection.connect(() => {
    //   connection.query(
    //     "SELECT id, name from database where status = 'ACTIVE'",
    //     (err, results, fields) => {
    //       if (err) throw err;
    //       results.forEach(({ id, name }) => {
    //         const connection = this.createConnection(name);
    //         connection.connect();
    //         this.dbs.push({
    //           id,
    //           name,
    //           connection
    //         });
    //       });
    //     }
    //   );
    // });
  }

  getById(id: number): mysql.Connection {
    const db = this.dbs.find(db => db.id == id);
    if (db) return db.connection;
    throw new Error(`Database with id = ${id} is not found`);
  }

  getByName(name: string): mysql.Connection {
    const db = this.dbs.find(db => db.name == name);
    if (db) return db.connection;
    throw new Error(`Database with name = ${name} is not found`);
  }

  createConnection(database: string): mysql.Connection {
    return mysql.createConnection({
      host,
      user,
      password,
      database
    });
  }
}

const connection = new Connection();

export { connection };
