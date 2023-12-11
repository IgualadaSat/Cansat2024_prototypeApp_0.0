import sqlite from 'sqlite3';
import fs from "fs";

export class Database {
	static src = './database/dades.db';
	static db = null;

	static async init() {
		try {
		  Database.db = new sqlite.Database(Database.src);

		  const sql = fs.readFileSync('./database/src/init.sql', 'utf8');

	      await Database.db.exec(sql);
		} catch (error) {
		  console.error('Error al crear la base de datos:', error);
		}
	}

	static async insert(id_tabla,campo,valor) {
		try {
		  const sql = `INSERT INTO ${id_tabla} (${campo}) VALUES (?)`;

		  Database.db.run(sql, [valor], function (err) {
		    if (err) {
		      throw err;
		    }

		    console.log(`Data inserted successfully. Row ID: ${this.lastID}`);
		  });
		} catch (error) {
		  console.error('Error inserting data:', error);
		}
	}

	static async clearTable(id_tabla) {
		try {
		  Database.db = new sqlite.Database(Database.src);

		  const clearQuery = `DELETE FROM ${id_tabla}`;
			
		  const runAsync = () => {
		    return new Promise((resolve, reject) => {
		      Database.db.run(clearQuery, function (err) {
		        if (err) {
		          reject(err);
		        } else {
		          resolve(this.changes);
		        }
		      });
		    });
		  };

		  const changes = await runAsync();

		  console.log(`Cleared ${changes} rows from table ${id_tabla}.`);
		} catch (error) {
		  console.error('Error clearing table:', error);
		} finally {
		  if (Database.db) {
		    Database.db.close();
		  }
		}
	}

	static async displayTable(id_tabla) {
		try {
		  const selectQuery = `SELECT * FROM ${id_tabla}`;

		  const allAsync = () => {
		    return new Promise((resolve, reject) => {
		      Database.db.all(selectQuery, [], (err, rows) => {
		        if (err) {
		          reject(err);
		        } else {
		          resolve(rows);
		        }
		      });
		    });
		  };

		  const rows = await allAsync();

		  console.log(`Contents of table ${id_tabla}:`);
		  rows.forEach((row) => {
		    console.log(row);
		  });
		} catch (error) {
		  console.error('Error displaying table:', error);
		}
	}

	static async logTables() {
		try {
		  const sql = fs.readFileSync('./database/src/getTables.sql', 'utf8');
		  
		  Database.db.all(sql, [], (err, rows) => {
		    if (err) {
		      throw err;
		    }

		    console.log('Tables in the database:');
		    rows.forEach((row) => {
		      console.log(row.name);
		    });
		  });
		} catch (error) {
		  console.error('Error logging tables:', error);
		}
	}
}
