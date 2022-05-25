const { app } = require('electron')

const isDevelopment = !app.isPackaged;

function mainClient(win) {
    if (isDevelopment) {
        const net = require('net');
        const sock = new net.Socket();
        sock.setTimeout(200);
        sock.on('connect', () => {
            console.log("connect");
            sock.destroy();
            require('electron-connect').client.create(win);
        }).on('timeout', (e) => {
            console.log("timeout");
        }).on('error', (e) => {
            console.log("error");
        }).connect(30080, "127.0.0.1");
    }
}
function rendererClient() {
    require('electron-connect').client.create()
}

// 客户端可以在主进程或渲染进程中添加，但是注意不要同时在主进程和渲染进程添加。(二选一)
module.exports = {
    mainClient,
    rendererClient
}