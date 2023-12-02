class Style {
	static windows = [document.querySelectorAll('.window'),[]];
	static update(){
		for(let i = 0;i < windows[0].length;i++){
			windows[1][i] = false;
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	let header = document.querySelectorAll('header');
	let numWindows = document.querySelectorAll('.window').length;
	header[0].style.gridTemplateColumns = `repeat(${numWindows}, 1fr)`;
});
