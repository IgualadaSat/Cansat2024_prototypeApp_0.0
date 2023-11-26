import { Router, Request, Response } from 'express';
import db from './db.js';

const router: Router = Router();

// Ejemplo: Obtener todos los elementos de una tabla
router.get('/datos', (req: Request, res: Response) => {
  db.query('SELECT * FROM fase', (error, results) => {
    if (error) {
      console.error('Error al obtener datos:', error);
      res.status(500).send('Error al obtener datos de la base de datos');
    } else {
      res.json(results);
    }
  });
});

export default router;