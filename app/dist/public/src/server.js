"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ssh2_1 = require("ssh2");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
app.get('*', (req, res) => {
    const conn = new ssh2_1.Client();
    const raspberryPiConfig = {
        host: '000.000.00.00',
        port: 22,
        username: 'root',
        password: ''
    };
    conn.on('ready', () => {
        conn.exec('ls', (err, stream) => {
            if (err)
                throw err;
            // Capturar la salida del comando
            let output = '';
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
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../', 'index.html'));
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
