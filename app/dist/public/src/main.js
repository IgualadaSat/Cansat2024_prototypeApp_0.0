class Main {
    static main() {
    }
    static update() {
        Vista.update();
    }
}
//js mierdas
Main.main();
setInterval(() => {
    Main.update();
}, 10);
