const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true, // Cho phép sử dụng Node.js trong HTML
      contextIsolation: false, // Cho phép truy cập Node.js từ frontend
    },
  });

  win.loadFile("index.html");
  win.on("focus");
};

app.whenReady().then(() => {
  createWindow();
});
