canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= " blue";
ctx.lineWidth = 5;
ctx.arc(x=250, y=215, 40, 0, 2*Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth = 5;
ctx.arc(x=300, y=250, 40, 0, 2*Math.PI);
ctx.stroke();

// Similarly, create a red circle with position 210 and 40#
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth = 5;
ctx.arc(x=350, y=215, 40, 0, 2*Math.PI);
ctx.stroke();

// Similarly, create an orange circle with position 300 and 250
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth = 5;
ctx.arc(x=400, y=250, 40, 0, 2*Math.PI);
ctx.stroke();
// Similarly, create a green circle with position 400 and 250
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth = 5;
ctx.arc(x=450, y=215, 40, 0, 2*Math.PI);
ctx.stroke();



