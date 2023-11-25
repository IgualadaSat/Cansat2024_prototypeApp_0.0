class Main{
	static main():void{
	}
	static update():void{
		Vista.update();
	}
}

//js mierdas
Main.main();
setInterval(() => {
	Main.update();
},10);