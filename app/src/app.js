//FASES
let fases = document.getElementsByClassName("fase");
for(let i = 0;i < fases.length;i++)
	fases[i].addEventListener("click",()=>{window.alert(fases[i].innerHTML)});

//VISTAS
class Vista {
	value = false;
	static id = 0;
	static update(){
		for(let i = 0;i < vistas.length;i++){
			vistas[i].style.background = vista[i].value?"#003366":"#ffd633";
			vistas[i].style.borderTop = vista[i].value?"6px solid #ff3399":"6px solid #ffd633";
			vistas[i].style.color = vista[i].value?"#fff":"#000";
		}
	}
}
let vista = [];
let vistas = document.getElementsByClassName("vista");
for(let i = 0;i < vistas.length;i++){
	vista[i] = new Vista();
	vistas[i].addEventListener("mouseenter",()=>{
		for(let j = 0;j < vistas.length;j++)
			vista[j] = new Vista();
		vista[i].value = true;
		Vista.id = i;
	});	
}