/*function myFunction() {
	var x = document.getElementById('nav');
	if (x.style.display === 'block') {
				x.style.display = 'none';
			} else {
				x.style.display = 'block';
			}
			if (x.style.display === 'none') {
				x.style.display = 'block';
			}
};


function myFynction() {
			var x = document.getElementById('text');
			if (x.style.display === 'block') {
				x.style.display = 'none';
			} else {
				x.style.display = 'block';
			}
			
		};*/
document.getElementById("gamburger").onclick = function () {
	open()
};
function open() {
	document.getElementById("nav").classList.toggle("show");
}