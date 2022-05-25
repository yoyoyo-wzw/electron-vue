const { app, BrowserWindow, session } = require('electron')
const { createWindow } = require('./main/initMainWin')
const initIpc = require('./main/initIpc')
const { vuePropjectUrl } = require('./utils/enum')


app.whenReady().then(() => {
    const win = createWindow()
    initIpc()

    // CSP安全策略
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
            ...details.responseHeaders,
            'Content-Security-Policy': [`script-src \'self\' ${vuePropjectUrl}`]
            }
        })
    })
    // app名称
    if (process.platform === 'win32'){
        app.setAppUserModelId('electron');
    }
    // 如果没有窗口打开则打开一个窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭所有窗口时退出应用 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})