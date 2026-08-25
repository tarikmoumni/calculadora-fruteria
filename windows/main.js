const { app, BrowserWindow, shell } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 820,
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    title: 'Calculadora Frutería',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadURL('https://tarikmoumni.github.io/calculadora-fruteria/');
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
