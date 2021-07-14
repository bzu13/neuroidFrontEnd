function getNeuroids(){
				  var x = document.getElementById("numberOfNeuroids").value;
				  console.log(x);
				  return x;
			} //function to capture number of neuroids
function getLayers(){
				  var x = document.getElementById("hiddenLayers").value;
				  console.log(x);
				  return x;
			} //function to capture number of layers 
function getWeights() {
				  var x = document.getElementById("weights").value;
				  var values = [x];
				  console.log(values);
				  return values;

			} //function to capture number weights for hidden layers
function getNeuroidProperties(neuroidNumber) {
				  
				  var kr = document.getElementById("KrValue").value;
				  var umbr = document.getElementById("umbrValue").value;
				  var beta = document.getElementById("BetaValue").value;
				  var maxcount = document.getElementById("maxcountValue").value;
				  var values = [kr, umbr, beta, maxcount];
				  console.log(values);
				  console.log(neuroidNumber);
				  return values;
			} //function to capture properties of Neuroid
    var canvas;    // DOM object corresponding to the canvas
    var graphics;  // 2D graphics context for drawing on the canvas

    function setPixel(x, y, color, lineWidth)
    {
        graphics.fillStyle = color;
        graphics.fillRect(x, y, lineWidth, lineWidth);
    }


    function drawLine(x1,y1,x2,y2,color,lineWidth) {
        // TODO: your code here
        var dy = y2 - y1;
        var dx = x2 - x1;

        var m = dy/dx;
        var mInv = dx/dy;

        if(dx == 0 && dy == 0)
        {
            setPixel(x1, y1, color);
        }

        else if (Math.abs(dx) >= Math.abs(dy))
            {
                if(x2 < x1)
                {
                    drawLine(x2, y2, x1, y1, color, lineWidth);
                }

                else
                {    
                    var yVar = y1;

                    for (var x = x1; x <= x2; x++) 
                    {
                        setPixel(x, Math.round(yVar), color, lineWidth);
                        yVar = yVar + m;
                    }
                }
            }
    
        else
            {
                if(y2 < y1)
                    {
                        drawLine(x2, y2, x1, y1, color, lineWidth);
                    }
                
                else
                    
                    {
                        var xVar = x1;

                        for (var y = y1; y <= y2; y++) 
                        {
                            setPixel(Math.round(xVar), y, color, lineWidth);
                            xVar = xVar+ mInv;
                        }
                    }    
            }

    }


    
    
    function draw(){

        //drawLine(200, 100, 200, 300, "DarkTurquoise", 3); //(vertical line)
        //drawLine(130, 110, 270, 290, "mediumblue", 3); //negative slope line
        //drawLine(270, 110, 130, 290, "mediumblue", 3); //positive slope line
        
        drawLine(0, 70, 330, 70, "lightblue", 3); //weight 1
        drawLine(0, 190, 330, 70, "pink", 3); //weight 2
        drawLine(400, 70, 540, 70, "purple", 3); //output 1
        drawLine(400, 190, 540, 190, "purple", 3); //output 2
        drawLine(0, 70, 330, 190, "lightblue", 3); //weight 3
        drawLine(0, 190, 330, 190, "pink", 3); //weight 4

       
        //drawLine(0, 300, 330, 300, "lightblue", 3); //horizontal line
        //drawLine(0, 410, 330, 410, "lightblue", 3); //horizontal line
        //drawLine(0, 530, 330, 530, "lightblue", 3); //horizontal line


    }

    function main() {
        canvas = document.getElementById("theCanvas");
        graphics = canvas.getContext("2d");
        draw();  // draw something on the canvas
    }