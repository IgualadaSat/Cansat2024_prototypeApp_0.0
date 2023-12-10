import sqlite from 'sqlite3';

export class Database {
	static src = './dades/dades.db';
	static db = null;

	static async init() {
		try {
		  Database.db = new sqlite.Database(Database.src);

		  await Database.db.exec(`
		    CREATE TABLE IF NOT EXISTS dades (
		      id INTEGER PRIMARY KEY AUTOINCREMENT,
		      temperatura INT
		    );
		  `);

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
