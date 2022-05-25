const { BrowserWindow } = require('electron')
const path = require('path')
const { mainClient } = require('../utils/hot')
const { vuePropjectUrl } = require('../utils/enum')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadURL(vuePropjectUrl)
    // win.loadFile(path.join(__dirname, '../pages/vue-project/dist/index.html'))

    mainClient(win)
    return win
}

module.exports = {
    createWindow
}