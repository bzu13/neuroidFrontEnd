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

console.log(result); // shows result of training B to 0 when A is set to 1
console.log(A); // shows the current properties of the Neuron A
console.log(B); // shows the current properties of the Neuron B

