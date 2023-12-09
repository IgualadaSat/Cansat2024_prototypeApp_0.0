import express from 'express';
import path from 'path';
import { Rasp } from "./src/rasp.js";
import { Terminal } from "./src/terminal.js";

const app = express();
const port = 4953;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist/public/')));
app.use(express.json());

app.post("/terminal", (req, res) => {
  res.json(Terminal.msgs);
});

app.post('/connex', (req, res) => {
  let input = req.body.text;
  let output = Rasp.connect(input);
  Terminal.msgs[Terminal.msgs.length] = output.text;
  if(input == "clear")
    Terminal.msgs = [];
  console.log("rasp: ",output.text);
  res.json(output); 
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});