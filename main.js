"use strict";

const path = require('path');
const {app, BrowserWindow, ipcMain, Menu, nativeImage, Tray} = require('electron');

// const TimeBox = require('./renderer/controller/timebox');
const Timer = require('./renderer/controller/timer');

class TimeSpan {
  constructor() {
    this.timeSpan = null;
    this.timeSpanIcon = null;
  }

  init() {
    this.initApp();
    this.initIpc();
  }

  initApp() {
    app.on('ready', (event) => {
      this.createWindow();
      this.createTray();
      this.createTimer();
      console.log("Create Timer");
    });

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (timeSpan === null) {
        this.createWindow();
      } else {
        // this.createTimeBoxWindow();
      }
    });
  }

  initIpc() {
    ipcMain.on('log', (event, message) => {
      console.log(message);
    });

    // ipcMain.on('put-in-tray', (event, message) => {
    //
    // });
  }

  createWindow() {
    this.timeSpan = new BrowserWindow({
      'width': 418,
      'height': 1057,
      'min-width': 360,
      'min-height': 540,
      // 'frame': false,
      'center': true,
  		// 'transparent': true,
  		'shadow':true
    });

    this.timeSpan.loadURL(`file://${__dirname}/index.html`);
    // timeSpan.loadURL('http://phantr4x.github.io/EvaColorTrans/')

    // timeSpan.webContents.openDevTools();

    this.timeSpan.on('closed', function () {
      this.timeSpan = null;
    });
  }

  // createTimeBoxWindow() {
  //   this.createTimeBoxWindow = new TimeBox();
  // }

  createTray() {
    this.timeSpanIcon = new Tray(`${__dirname}/Icon-24.png`);
    const contextMenu = Menu.buildFromTemplate([{
      label: 'Quit',
      click: () => {
        event.sender.send('tray-removed');
        timeSpanIcon.destroy();
      }
    }, {
      label: 'Item',
    }]);
    this.timeSpanIcon.setToolTip('This is my application.');
    this.timeSpanIcon.setContextMenu(contextMenu);
  }

  createTimer() {
    this.Timer = new Timer();
    this.Timer.createCanvas();
  }
}

new TimeSpan().init();
