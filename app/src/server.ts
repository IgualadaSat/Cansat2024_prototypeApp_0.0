import express, { Application, Request, Response } from 'express';
import path from 'path';
import { Client } from 'ssh2';

const app: Application = express();
const port: number = 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/enviar-comando', (req: Request, res: Response) => {
  const conn: Client = new Client();

  const raspberryPiConfig = {
    host: '000.000.00.00',
    port: 22,
    username: 'root',
    password: ''
  };

  conn.on('ready', () => {
    conn.exec('ls', (err, stream) => {
      if (err) throw err;

      // Capturar la salida del comando
      let output: string = '';
      stream.on('data', data => {
        output += data.toString();
      });

      stream.on('end', () => {
        // Cerrar la conexión SSH después de ejecutar el comando
        conn.end();
        // Enviar la salida del comando como respuesta HTTP
        res.send(`Resultado del comando: ${output}`);
      });
    });
  }).connect(raspberryPiConfig);
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});