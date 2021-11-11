const { route } = require('./router');
const server = require('./server');
const requestHandlers = require('./requestHandlers');

let handle = {}

handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

server.start(route,handle)