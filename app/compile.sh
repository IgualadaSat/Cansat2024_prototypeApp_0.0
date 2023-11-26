compilar() {
    npx tsc
}

conectar() {
    node dist/app.js
}

if [ compilar ]; then
    compilar
    conectar
fi