const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 200
  }
  )

  win.loadFile('index.html')
}
// to remove electron.app.elextron signature
if (process.platform === 'win32')
{
    app.setAppUserModelId(app.name);
}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
