//the setup


//needed vars:

var dots=0;
var old_X=-1;
var old_Y=-1;

//fxn to draw the dots, and attach the lines
var drop_dot = function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    if(dots != 0){
	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	line.setAttribute("x0", old_X);
	line.setAttribute("y0", old_Y);
	line.setAttribute("x1", x);
	line.setAttribute("y1", y);
	line.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	document.getElementById("vimage").appendChild(line);
    }
    dots++;
    old_X=x;
    old_Y=y;
    console.log("dot");
    
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "green");

    document.getElementById("vimage").appendChild(c);
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


document.getElementById("vimage").addEventListener("click", drop_dot);
//document.getElementById("clear").addEventListener("click", clear_canvas);
