"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Cansat',
});
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
    else {
        console.log('Conexión a la base de datos establecida');
    }
});
exports.default = connection;
