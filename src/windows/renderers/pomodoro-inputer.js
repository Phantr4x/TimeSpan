"use strict";

var banner = document.getElementsByClassName('pomodoro-name')[0],
    input = document.getElementsByClassName('pomodoro-input')[0];
var taskName = null;

input.onfocus = (event) => {
  banner.style.visibility = 'hidden';
}
input.onblur = (event) => {
  banner.style.visibility = "visible";
}

input.onchange = (event) => {
  taskName = input.value;
  banner.innerHTML = taskName;
}
