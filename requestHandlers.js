
const { exec } = require('child_process');

function start() {
    console.log("Request handler 'start' was called.");

    let content = 'empty'

    exec('ls', (error, stdout, stderr) => {
        content = stdout
    })

    return content
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return 'hello upload'
}

exports.start = start;
exports.upload = upload;