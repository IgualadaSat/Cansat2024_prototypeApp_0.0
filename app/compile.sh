compilar() {
    npx tsc
}

conectar() {
    node dist/public/src/server.js
}

if [ compilar ]; then
    compilar
    conectar
fi