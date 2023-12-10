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
