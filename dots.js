//the setup


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



/*
//fxn to clear
var clear_canvas = function(){
    dots=0;
    old_X=0;
    old_Y=0;
    
    ctx.clearRect(0,0,500,500);
}
*/


document.getElementById("slate").addEventListener("click", drop_dot);
//document.getElementById("clear").addEventListener("click", clear_canvas);
