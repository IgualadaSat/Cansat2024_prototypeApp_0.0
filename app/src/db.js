import mysql from "mysql";

export class Database {
	static host = "localhost";
	static user = "root";
	static password = "";
	static database = "terminal";

	static connex = 0;

	static connect(){
		Database.connex = mysql.createConnection(Database);

		Database.connex.connect((err) => {
	      if (err) {
	        console.error('Error connecting to database:', err);
	        throw err;
	      }
	      console.log('Connected to database');
	    });
	}
	static disconnect() {
	    Database.connex.end((err) => {
	      if (err) {
	        console.error('Error disconnecting from database:', err);
	        throw err;
	      }
	      console.log('Disconnected from database');
	    });
 	}

 	static query(sql, values, callback) {
	    Database.connex.query(sql, values, (err, results, fields) => {
	      if (err) {
	        console.error('Database query error:', err);
	        throw err;
	      }
	      callback(results, fields);
	    });
  	}
}