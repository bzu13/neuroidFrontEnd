function getSetUp() {
				  var x = document.getElementById("numberOfNeuroids").value;
				  var y = document.getElementById("hiddenLayers").value;
				  var values = [x,y];
				  console.log(values);
				  return values;

			} //function to capture number of layers and 
function getNeuroidProperties() {
				  
				  var kr = document.getElementById("KrValue").value;
				  var umbr = document.getElementById("umbrValue").value;
				  var beta = document.getElementById("BetaValue").value;
				  var maxcount = document.getElementById("maxcountValue").value;
				  var values = [kr, umbr, beta, maxcount];
				  console.log(values);
				  return values;
			} //function to display name of Material