"use strict";

const path = require('path');
const {app, BrowserWindow} = require('electron');

const Common = require('../../common');

class StickyWindow {
  constructor() {
    this.createWindow()
  }

  createWindow() {
    this.stickyWindow = new BrowserWindow({
      
    })
  }
}

module.exports = StickyWindow;
