class Header {
	static windows = document.querySelectorAll('.window');
	static windowid = 0;

	static main(){
		let header = document.querySelectorAll('header');
		let numWindows = document.querySelectorAll('header .window').length;
		header[0].style.gridTemplateColumns = `repeat(${numWindows}, 1fr)`;

		for(let i = 0;i < Header.windows.length;i++){
			Header.windows[i].addEventListener("click",()=>{
				Header.windowid = i;
			});
		}
	}

	static update(){
		for(let i = 0;i < Header.windows.length;i++){
			Header.windows[i].style.display = "block";
			Header.windows[i].style.paddingLeft = "10px";
			Header.windows[i].style.height = "calc(100% - 4px)";
			Header.windows[i].style.borderTop = "4px solid #0000";
			Header.windows[i].style.background = "#fff0";
		}
		Header.windows[Header.windowid].style.borderTop = "4px solid #0ffa";
		Header.windows[Header.windowid].style.background = "#fff2";
	}
}

Header.main();
setInterval(()=>{
	Header.update();
},10);
