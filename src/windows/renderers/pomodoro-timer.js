"use strict";

window.onload = () => {
  let trigger = document.querySelector('.pomodoro-trigger') || document.getElementsByClassName('pomodoro-trigger')[0],
      banner = document.querySelector('.pomodoro-banner') || document.getElementsByClassName('pomodoro-banner')[0],
      background_circle = document.getElementsByTagName('circle')[0] || document.querySelectorAll('circle')[0],
      progress_circle = document.getElementsByTagName('circle')[1] || document.querySelectorAll('circle')[1];

  let radius = progress_circle.getAttribute('r');
  // console.log(background_circle, progress_circle);
  let current, start, end;
  let percent;

  banner.innerHTML = SETTINGS.duration + ':00';
  let timer = setInterval(() => {
    current = moment();
    progressUpdater(current);
    if (start) timeCounter();
  }, 16);

  trigger.onclick = triggerHandler;
  trigger.ontap = triggerHandler;

  function triggerHandler() {
    start = moment();
    end = moment().add(SETTINGS.duration, 'minutes');
    // console.log(start, end);
  }

  function progressUpdater(current) {
    let timepass = current.diff(start, 'seconds');
    percent = 1 - timepass / (60 * SETTINGS.duration);
    let perimeter = Math.PI * 2 * 175;
    let lt = perimeter * percent,
        rt = perimeter * (1- percent);
    console.log(timepass, percent);
    if (percent >= 0) {
      progress_circle.setAttribute('stroke-dasharray', lt + " " + rt);
    }
  }

  function timeCounter() {
    let m = end.diff(current, 'minutes'),
        s = end.diff(current, 'seconds')%60;
    if (m >= 0 && s >= 0) {
      s < 10 ? s = '0' + s : s += '';
      banner.innerHTML = m + ":" + s;
    }
  }

  function notifier() {
    if (percent < 0) {
      document.querySelector('.wrapper').style.background = "#000";
    }
  }
}
