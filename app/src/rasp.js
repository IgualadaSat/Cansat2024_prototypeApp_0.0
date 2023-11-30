import { Client } from 'ssh2';

export class Rasp {
	static host = "raspberrypi";
	static port = 22;
	static username = "pi";
	static password = "raspberry";

	static connect(msg) {
		let r = "aun no me he conectado";
		const conn = new Client();
		conn.on('ready', () => {
		  conn.exec(msg, (err, stream) => {
		    if (err) {
		      conn.end();
		      console.error("Error executing command:", err);
		      r = { text: err };
		    }
		    let result = 'no hay respuesta';
		    stream.on('data', (data) => {
		      result += data;
		    });
		    stream.on('end', () => {
		      conn.end();
		      r = { text: result };
		    });
		  });
		});
		conn.on('error', (err) => {
		  conn.end();
		  console.error("Connection error:", err);
		  r = { text: err };
		});
		conn.connect(Rasp);
		return {text: r};
	}
}