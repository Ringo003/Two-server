var http = require("http");

var port1 = 7000;
var port2 = 7500;

function handleRequestOne(request, response){
response.end("It works!!! WOO HOO!:");
}
	// body...
	function handleRequestTwo(request, response) {
response.end("bad bad bad:");
	// body...
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(port1, function(){
	console.log("Server 1 is on");
});

serverTwo.listen(port2, function(){
	console.log("Server 2 is on");
});




