var http = require("http");
var fs = require('fs');
var url = require('url');

//create a server
http.createServer(function(request, response){
	
	var pathname = url.parse(request.url).pathname;
	
	console.log("request for " + pathname + " received");
	
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			//HTTP status : 404 : not found
			// Content Type : text/plain
			response.writeHead(404, {'Content-type': 'text/html'});
		} else {
			// Page found
			// HTTP status : 2300 : ok
			// Content Type : text/plain
			response.writeHead(200, {'Content-type' : 'text/html'});
		
			// write the content of the file to response body
			response.write(data.toString());
		}
		// Send the response body
		response.end();
	});
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')