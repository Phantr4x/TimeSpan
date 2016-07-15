"use strict";

const path = require('path');

const {app, BrowserWindow, ipcMain} = require('electron');

const Common = require('./common');

const TimerWindow = require('./windows/controllers/timer');
const StickyWindow = require('./windows/controllers/sticky');
const AppTray = require('./windows/controllers/app_tray');

class TimeSpan {
  constructor() {
    this.timerWindow = null;
    this.stickyWindow = null;
    this.tray = null;
  }

  init() {
    this.initApp();
    this.initIPC();
  }

  initApp() {
    app.on("ready", () => {
      this.createTimerWindow();
      // this.createTray();
    })

    app.on('activate', () => {
      if (this.timerWindow == null) {
        this.createTimerWindow();
      } else {
        this.timerWindow.show();
      }
    });

    app.on("window-all-closed", () => {
      app.quit();
    })
  }

  initIPC() {
    ipcMain.on('log', (event, message) => {
      console.log(message);
    })
  }

  createTimerWindow() {
    this.timerWindow = new TimerWindow();
  }

  createStickyWindow() {
    this.stickyWindow = new StickyWindow();
  }

  createTray() {
    this.tray = new AppTray(this.timerWindow, this.stickyWindow);
  }
}

new TimeSpan().init();
