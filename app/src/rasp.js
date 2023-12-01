import { Client } from 'ssh2';

export class Rasp {
	static host = "192.168.222.105";
	static port = 22;
	static username = "igdsat";
	static password = "MegaSat";

	static r = "conectando...";

	static connect(msg) {
		Rasp.network(msg);
		return {text:Rasp.r};
	}
	static network(msg){
		const conn = new Client();
		conn.on('ready', () => {
		  conn.exec(msg, (err, stream) => {
		    if (err) {
		      conn.end();
		      console.error("Error executing command:", err);
		      Rasp.r = err;
		    }
		    let result = 'no hay respuesta';
		    stream.on('data', (data) => {
		      result = data.data;
		    });
		    stream.on('end', () => {
		      conn.end();
		      Rasp.r = result;
		    });
		  });
		});
		conn.on('error', (err) => {
		  conn.end();
		  console.error("Connection error:", err);
		  Rasp.r = err;
		});
		conn.connect(Rasp);
	}
}
