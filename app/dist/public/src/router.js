"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_express_1 = require("node:express");
const db_js_1 = __importDefault(require("./db.js"));
const router = (0, node_express_1.Router)();
// Ejemplo: Obtener todos los elementos de una tabla
router.get('/datos', (req, res) => {
    db_js_1.default.query('SELECT * FROM fase', (error, results) => {
        if (error) {
            console.error('Error al obtener datos:', error);
            res.status(500).send('Error al obtener datos de la base de datos');
        }
        else {
            res.json(results);
        }
    });
});
exports.default = router;
