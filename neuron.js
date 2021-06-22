//var http = require('http');
var synaptic = require('synaptic');
var A = new synaptic.Neuron();
var B = new synaptic.Neuron();

A.project(B);

var learningRate = .2;

for(var i = 0; i < 20000; i++)
{
	// when A activates 1
	A.activate(1);
	
	// train B to activate 0
	B.activate();
	B.propagate(learningRate, 0); 
}

// test it
A.activate(1);
var result = B.activate();

console.log(result);
console.log(A);

//http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World!');
//}).listen(8080);
