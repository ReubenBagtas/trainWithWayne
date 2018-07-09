const electron = require('electron');
const {
  app,
  BrowserWindow
} = electron;

let win;

function createWindow() {

  // win = new BrowserWindow({
  //   width: 600,
  //   height: 600,
  //   backgroundColor: '#ffffff',
  // })

  // fit to screen size
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({width, height})

  win.loadURL(`file://${__dirname}/dist/train-with-wayne/index.html`)

  //chrome dev tools
  // win.webContents.openDevTools()

  win.on('closed', function () {
    win = null;
  })
}

// Create window on electron initialization
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', function () {

  //on macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  //macOS specific close process
  if (win === null) {
    createWindown()
  }
})
