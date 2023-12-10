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

		  console.log('Base de datos creada exitosamente.');
		} catch (error) {
		  console.error('Error al crear la base de datos:', error);
		} finally {
		  if (Database.db) {
		    Database.db.close();
		  }
		}
	}
}
