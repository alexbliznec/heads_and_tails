const http = require('http');
//console.log(http);
const server = http.createServer(function(req, res){
	console.log(req.url);
	//console.log(res);
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	res.end('привет мир');

});
server.listen(3000, '127.0.0.1')
console.log('отслеживаем порт 3000');
