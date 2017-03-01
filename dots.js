
//needed vars:

var dots=0;
var old_X=0;
var old_Y=0;

//fxn to draw the dots, and attach the lines
var drop_dot = function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    if(dots != 0){
	var l = document.createElementNS("http://www.w3.org/2000/svg","line");
	l.setAttribute("x1", old_X);
	l.setAttribute("y1", old_Y);
	l.setAttribute("x2", x);
	l.setAttribute("y2", y);
	l.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	document.getElementById("vimage").appendChild(l);
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




//fxn to clear
var clear_svg = function(){
    dots=0;
    old_X=0;
    old_Y=0;
    
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", "250");
    c.setAttribute("cy", "250");
    c.setAttribute("r", "5000");
    c.setAttribute("fill", "white");

    document.getElementById("vimage").appendChild(c);
}


document.getElementById("vimage").addEventListener("click", drop_dot);
document.getElementById("clear").addEventListener("click", clear_svg);
