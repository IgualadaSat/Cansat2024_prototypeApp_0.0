class Style {
	static windows = [document.querySelectorAll('.window'),[]];
	static update(){
		for(let i = 0;i < windows.length;i++){
			windows[i][i] = false;
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	let header = document.querySelectorAll('header');
	let numWindows = document.querySelectorAll('.window').length;
	header[0].style.gridTemplateColumns = `repeat(${numWindows}, 1fr)`;
});
