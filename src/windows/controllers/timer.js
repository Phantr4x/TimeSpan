"use strict";

const path = require('path');
const {app, BrowserWindow, ipcRenderer} = require('electron');

const Common = require('./../../common.js');

class TimerWindow {
  constructor() {
    this.createWindow();
  }

  createWindow() {
    this.timerWindow = new BrowserWindow({
      title: Common.TIMESPAN,
      width: Common.WINDOW_SIZE_TIMER.width,
      height: Common.WINDOW_SIZE_TIMER.height,
      minWidth: 360,
      minHeight: 672,
      resizable: true,
      backgroundColor: "#F44336",
      center: true,
      show: true,
      frame: true,
      autoHideMenubar: false,
      webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: false,
        webSecurity: false,
        // preload: path.join(__dirname, '../../inject/preload.js')
      }
    });

    this.timerWindow.webContents.setUserAgent(Common.USER_AGENT);
    if (Common.DEBUG_MODE) {
      this.timerWindow.webContents.openDevTools();
    }
    this.timerWindow.loadURL(`file://${__dirname}/../views/template.html`);
    // this.timerWindow.loadURL("http://luxun.pro");

    // this.timerWindow.webContents.on('will-navigate', (event, url) => {
    //   if (/(.*wx.*\.qq\.com.*)|(web.*\.wechat\.com.*)/.test(url)) return;
    //   event.preventDefault();
    // });

    // this.timerWindow.on('close', (event) => {
    //   if (this.timerWindow.isVisible()) {
    //     event.preventDefault();
    //     this.timerWindow.hide();
    //   }
    // });

    // this.timerWindow.on('page-title-updated', (ev) => {
    //   if (this.loginState.current == this.loginState.NULL) {
    //     this.loginState.current = this.loginState.WAITING;
    //   }
    //   ev.preventDefault();
    // });

    // this.timerWindow.webContents.on('dom-ready', () => {
    //   this.timerWindow.webContents.insertCSS(CSSInjector.commonCSS);
    //   if (process.platform == "darwin") {
    //     this.timerWindow.webContents.insertCSS(CSSInjector.osxCSS);
    //   }
    //
    //   new UpdateHandler().checkForUpdate(`v${app.getVersion()}`, true);
    // });

    // this.timerWindow.webContents.on('new-window', (event, url) => {
    //   event.preventDefault();
    //   shell.openExternal(new MessageHandler().handleRedirectMessage(url));
    // });
  }

  show() {
    this.timerWindow.show();
  }

  hide() {
    this.timerWindow.hide();
  }
}

module.exports = TimerWindow;
