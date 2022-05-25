const { ipcRenderer } = require('electron')
console.log(ipcRenderer)

const initTime = 4
let showTime = initTime
let showTimeEl = document.querySelector('#showTime')

function initTool() {
    let timer = null
    timer = setInterval(() => {
        if (showTime < 0) {
            showTime = initTime
            ipcRenderer.send('rest')
            clearInterval(timer)
            return
        }
        showTimeEl.innerHTML = showTime--
    }, 1000)
}
initTool()

ipcRenderer.on('message2', (event, arg) => {
    console.log(arg)
})