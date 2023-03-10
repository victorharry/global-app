const { app, BrowserWindow } = require('electron')

const urls = [
    "https://www.notion.so"
]

const createWindow = () => {
    win = new BrowserWindow({
        center: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            show: false
        }
    });
    win.maximize();
    // win.webContents.openDevTools();
    win.loadURL(urls[0]);

    win.once('ready-to-show', () => {
        win.show()
    });

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
