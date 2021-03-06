function route(handle, pathname, response, postData) {
    console.log(`about to route a request for ${pathname}`);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response,postData)
    } else {
        console.log(`No Request handler found for ${pathname}`);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}


exports.route = route
