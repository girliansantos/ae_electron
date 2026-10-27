const {app, BrowserWindow} = require('electron')
const path = require('node:path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 650,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#071052',
            symbolColor: '#ffffff'
        },
        //...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
// macOS: recria a janela ao clicar no ícone do dock
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    
})
// Windows/Linux: encerra quando todas as janelas fecham
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})  