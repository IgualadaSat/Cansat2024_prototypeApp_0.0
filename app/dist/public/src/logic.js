class Vista {
    value = false;
    static id = 0;
    static update() {
        for (let i = 0; i < vista.length; i++) {
            vistas[i].style.background = vista[i].value ? "#003366" : "#ffd633";
            vistas[i].style.borderTop = vista[i].value ? "6px solid #ff3399" : "6px solid #ffd633";
            vistas[i].style.color = vista[i].value ? "#fff" : "#000";
        }
    }
}
let vista = [];
let vistas = document.getElementsByClassName("vista");
for (let i = 0; i < vistas.length; i++) {
    vista[i] = new Vista();
    vistas[i].addEventListener("mouseenter", () => {
        for (let j = 0; j < vistas.length; j++)
            vista[j].value = false;
        vista[i].value = true;
        Vista.id = i;
        let frame = document.querySelector("#menul");
        frame.src = `parts/${vistas[Vista.id].innerHTML}.html`;
    });
}
