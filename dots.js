//the setup
var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff00ff";


//needed vars:

var dots=0;
var old_X=0;
var old_Y=0;

//fxn to draw the dots, and attach the lines
var drop_dot = function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    if(dots != 0){
	ctx.beginPath();
	ctx.moveTo(old_X,old_Y);
	ctx.lineTo(x,y);
	ctx.stroke();
	
    }
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    dots++;
    old_X=x;
    old_Y=y;
}


//fxn to find your location, and to place a rectangle
var plop_rectangle = function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    x-=50;
    y-=50;
    
    ctx.fillRect(x,y,100,100);
}

//fxn to clear
var clear_canvas = function(){
    dots=0;
    old_X=0;
    old_Y=0;
    
    ctx.clearRect(0,0,500,500);
}

/*
//the rectangle listener
document.getElementById("slate").addEventListener("click", plop_rectangle);
*/


document.getElementById("slate").addEventListener("click", drop_dot);

//the clear listener
document.getElementById("clear").addEventListener("click", clear_canvas);
