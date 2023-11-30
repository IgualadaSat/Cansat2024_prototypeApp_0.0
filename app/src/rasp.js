import { Client } from 'ssh2';

export class Rasp {
	static host = "185.38.129.93";
	static port = 22;
	static username = "root";
	static password = "e97ca6b35e";

	static connect(msg) {
		const conn = new Client();
		conn.on('ready', () => {
		  conn.exec(msg, (err, stream) => {
		    if (err) {
		      conn.end();
		      console.error("Error executing command:", err);
		      return { text: err };
		    }
		    let result = 'no hay respuesta';
		    stream.on('data', (data) => {
		      result += data;
		    });
		    stream.on('end', () => {
		      conn.end();
		      return { text: result };
		    });
		  });
		});
		conn.on('error', (err) => {
		  conn.end();
		  console.error("Connection error:", err);
		  return { text: err };
		});
		conn.connect(Rasp);
		return {text:"no se ha conectado bien"};
	}
}