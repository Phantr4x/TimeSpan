"use strict";

const path = require('path');
const {app, Menu, nativeImage, Tray} = require('electron');

const Common = require('../../common');

class AppTray {
  constructor(timerWindow, stickyWindow) {
    this.timerWindow = timerWindow;
    this.stickyWindow = stickyWindow;

    let AppIcon = nativeImage.createFromPath(path.join(__dirname, '../../../assets/icon.png'));
    AppIcon.setTemplateImage(true);

    this.tray = new Tray(AppIcon);
    this.tray.setToolTip(Common.TIMESPAN);

    let contextMenu = Menu.buildFromTemplate([
      { label: "Exit", click: () => app.exit(0) }
    ]);
    this.tray.setContextMenu(contextMenu);
  }

  setTitle(title) {
    this.tray.setTitle(title);
  }
}

module.exports = AppTray;
