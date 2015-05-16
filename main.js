
const CORE = require("org.firenode.core");
// TODO: Use `require("engine.io")` once we can map main module in locator.
const ENGINE_IO = require("engine.io/lib/engine.io");

//console.log("CORE SERVER", CORE);
//console.log("ENGINE_IO SERVER", ENGINE_IO);

exports.main = function (options) {

	console.log("firenode for server main!")


var server = ENGINE_IO.listen(options.port);

server.on('connection', function(socket){
console.log("NEW SOCKET");
  socket.send('utf 8 string');
  socket.send(new Buffer([0, 1, 2, 3, 4, 5])); // binary data
});

console.log("socket runing at", options.port);


}
