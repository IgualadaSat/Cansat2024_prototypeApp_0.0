import { Client } from 'ssh2';

export class Rasp {
	static host = "192.168.222.105";
	static port = 22;
	static username = "igdsat";
	static privatekey = "../ssh/id_rsa";

	static r = "hay problemas en la conexión";

	static connect(msg) {
		Rasp.network(msg);
		return {text:Rasp.r};
	}
	static network(msg){
		const conn = new Client();
		conn.on('ready', () => {
		  Rasp.r = "conectando...";
		  conn.exec(msg, (err, stream) => {
		    if (err) {
		      conn.end();
		      Rasp.r = err.toString();
			  stream.end();
		    }
		    let result = 'no hay respuesta';
		    stream.on('data', (data) => {
		      result = data.data.toString();
		    });
		    stream.on('end', () => {
		      conn.end();
		      Rasp.r = result;
		    });
		  });
		});
		conn.on('error', (err) => {
		  conn.end();
		  Rasp.r = err.toString();
		});
		conn.connect(Rasp);
	}
}
