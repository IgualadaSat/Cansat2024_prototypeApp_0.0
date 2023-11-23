class Main{
	static main(){
		console.log("listo pa romper caderas por wifi");
	}
	static update(){
		Vista.update();
	}
}

//js mierdas
Main.main();
setInterval(() => {
	Main.update();
},10);