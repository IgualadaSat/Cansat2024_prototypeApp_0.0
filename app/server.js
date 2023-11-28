import express from 'express';
import path from 'path';

const app = express();
const port = 4989;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist/public/')));

app.get('/connex', (req, res) => {
  const msg = req.body.texto;
  console.log('Texto desde el cliente:', msg);

  res.json({ mensaje: 'Texto recibido con éxito en el servidor' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});