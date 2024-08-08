import { app,BrowserWindow } from 'electron';
import { isDev } from 'electron-util/main';
const config={
    LOCAL_WEB_URL: 'http://localhost:5173/',
    PRODUCTION_WEB_URL: 'https://mbxp.vercel.app',
};
const createWindow=()=>{
    const win=new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences:{
            contextIsolation:true,
        }
    });
    if(isDev)win.loadURL(config.LOCAL_WEB_URL);
    else win.loadURL(config.PRODUCTION_WEB_URL);
}
app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin')app.quit();
});