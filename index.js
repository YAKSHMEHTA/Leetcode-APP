import { app,BrowserWindow } from "electron";

const createWindow = ()=>{
    const win = new BrowserWindow({
        width:1200,
        height:800,
        autoHideMenuBar:true
    })
    win.loadURL('https://leetcode.com');
}

app.whenReady().then(createWindow);
