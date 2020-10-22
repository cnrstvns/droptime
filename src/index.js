const { app, BrowserWindow, ipcMain: ipc } = require('electron');
const path = require('path');

let showingNotes = false;
let notesWindow;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 374,
    height: 110,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'logo.jpg')
  });

  notesWindow = new BrowserWindow({
    width: 300,
    height: 343,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    icon: path.join(__dirname, 'logo.jpg')
  })

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(true);

  notesWindow.loadFile(path.join(__dirname, 'notes.html'));
  notesWindow.setMenuBarVisibility(true);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipc.on('notes', (event) => {
  if(showingNotes){
    notesWindow.hide();
    showingNotes = false;
  }
  else{
    notesWindow.show();
    showingNotes = true;
  }
})