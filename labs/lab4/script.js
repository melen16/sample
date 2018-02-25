var canvas = document.getElementById('mycanvas');
var cav = canvas.getContext('2d');
// setting canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

cav.strokeStyle = "#222222"
cav.lineCap = "round";
cav.lineJoin = "round";
cav.lineWidth = 6;

var isDraw = false;
var X = 0;
var Y = 0;

function draw(e) {

	if(!isDraw) {
		return; //stop the function when mouse is not pressed

	}
	else{
		console.log(e);
		cav.beginPath();
		cav.moveTo(X, Y);
		cav.lineTo(e.offsetX, e.offsetY);
		cav.stroke();

		// updating last X and lastY

		X = e.offsetX;
		Y = e.offsetY;
	}

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDraw = true;
	X = e.offsetX;
	Y = e.offsetY;

});

function remove(){
	cav.clearRect(0,0, canvas.width, canvas.height);
}

canvas.addEventListener('mouseup', () => isDraw = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
