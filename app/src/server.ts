import express, { Application } from 'express';
//import routes from './routes.js';
import path from 'path';

const app: Application = express();
const port: number = 3000;

//app.use('/api', routes);
app.use(express.static(path.join(__dirname, '../')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});