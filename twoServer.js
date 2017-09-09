// var http= require("http");

// var port = 8080;

// function handlerequest(request,response){
//     response.end("It works! Hello Client from: " + request.url);
// }

// var server = http.createServer(handlerequest);

// server.listen(port, function(){
//     console.log("server is now listening on http://localhost:"+ port);
// });

var http= require("http");

var PORT= 7000;
var PORT1=7500;

function handleRequest(request,response){
    console.log("connected")
}


var server = http.createServer(handleRequest);

server.listen(PORT,function(){
    console.log("You are amazing");
    process.exit();
})

server.listen(PORT1),function(){
    console.log("YOU SMELL!!!")
    process.exit();
}
