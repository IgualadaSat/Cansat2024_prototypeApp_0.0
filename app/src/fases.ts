//FASES
const fases:any[] = document.getElementsByClassName("fase");
for(let i = 0;i < fases.length;i++)
	fases[i].addEventListener("click",()=>{window.alert(fases[i].innerHTML)});