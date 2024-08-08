import { app,BrowserWindow,ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { isDev } from 'electron-util/main';
const config={
    LOCAL_WEB_URL: 'http://localhost:5173/',
    PRODUCTION_WEB_URL: 'https://mbxp.vercel.app',
};
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const createWindow=()=>{
    const win=new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration: true,
            preload: path.join(__dirname,'preload.cjs')
        }
    });
    if(isDev)win.loadURL(config.LOCAL_WEB_URL);
    else win.loadURL(config.PRODUCTION_WEB_URL);
}
app.whenReady().then(createWindow);
ipcMain.on("close",()=>{
    if(process.platform!=='darwin')app.quit();
});
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin')app.quit();
});