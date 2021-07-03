const { Layer, Network }= window.synaptic
 const inputLayer = new Layer(1);
 const hiddenLayer = new Layer(2);
 const outputLayer = new Layer(3);

 inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

 const myNetwork = new Network({
     input: inputLayer, hiddenLayer,
     hidden: [hiddenLayer],
     output: outputLayer
 });

 // train the network
 const learningRate = .3;
 for (let i =0; i < 20000; i++)
 {
    //0,0 => 0
    myNetwork.activate([0,0]);
    myNetwork.propagate(learningRate, [0]);

    //0,1 => 1
    myNetwork.activate([0,1]);
    myNetwork.propagate(learningRate, [1]);

    //1,0 => 1
    myNetwork.activate([1,0]);
    myNetwork.propagate(learningRate, [1]);
    //1,1 =>0
    myNetwork.activate([1,1]);
    myNetwork.propagate(learningRate, [0]);
}

//test the network
 console.log(myNetwork.activate([0,0]));
 console.log(myNetwork.activate([0,1]));
 console.log(myNetwork.activate([1,0]));
 console.log(myNetwork.activate([1,1]));
