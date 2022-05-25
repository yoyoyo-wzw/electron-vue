const { ipcMain, Notification } = require('electron')

function initIpc() {
    ipcMain.handle('postMessage', (event, arg) => {
        new Notification({ title: 'test', body: arg }).show()
        return '主进程收到，over'
    })
}

module.exports = initIpc