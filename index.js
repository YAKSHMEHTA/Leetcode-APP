const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let overlayWin;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false
        }
    });
    win.loadURL('https://leetcode.com');
    win.webContents.setWindowOpenHandler(({ url }) => {
    
});
};



app.whenReady().then(() => {
    createWindow();
});

