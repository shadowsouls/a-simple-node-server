const http = require('http');
const url = require('url');



function start(route, handle) {

    function onRequest(request, response) {

        let pathname = url.parse(request.url).pathname// parse是旧版api
        // const pathname = new URL(request.url).pathname
        console.log(`-------------------------`);
        console.log(`Request for ${pathname} received.`);

        
        let content = route(handle, pathname, response)


    }

    http.createServer(onRequest).listen(8888)
    console.log("Server has started.");
}

exports.start = start