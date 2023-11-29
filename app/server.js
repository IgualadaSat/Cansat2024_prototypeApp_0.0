import express from 'express';
import path from 'path';

const app = express();
const port = 4989;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist/public/')));
app.use(express.json());

app.post('/connex', (req, res) => {
  const msg = req.body.text;
  console.log('navegador:', msg);

  res.json({ mensaje: msg }); //responde el msg primigenio
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});