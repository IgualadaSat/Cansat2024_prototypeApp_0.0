import express from 'express';
import path from 'path';
import { Rasp } from "./src/rasp.js"

const app = express();
const port = 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist/public/')));
app.use(express.json());

app.post('/connex', (req, res) => {
  const msg = req.body.text;
  res.json(Rasp.connect(msg)); 
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});