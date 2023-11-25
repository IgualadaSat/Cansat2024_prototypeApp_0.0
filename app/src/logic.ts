// VISTAS
class Vista {
    value:boolean = false;
    static id:number = 0;

    static update():void{
        for (let i:number = 0; i < vista.length; i++) {
            vistas[i].style.background = vista[i].value ? "#003366" : "#ffd633";
            vistas[i].style.borderTop = vista[i].value ? "6px solid #ff3399" : "6px solid #ffd633";
            vistas[i].style.color = vista[i].value ? "#fff" : "#000";
        }
    }
}

let vista:Vista[] = [];
let vistas:any[] = document.getElementsByClassName("vista");

for (let i:number = 0; i < vistas.length; i++) {
    vista[i] = new Vista();
    vistas[i].addEventListener("mouseenter", () => {
        console.log("Event listener registered");
        for (let j:number = 0; j < vistas.length; j++)
            vista[j].value = false;
        vista[i].value = true;
        Vista.id = i;
        let frame:any = document.querySelector("#menul");
        frame.src = `parts/${vistas[Vista.id].innerHTML}.html`;
    });
}