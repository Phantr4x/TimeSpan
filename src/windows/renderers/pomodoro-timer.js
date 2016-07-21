'use strict';

(() => {
  let trigger = document.querySelector('.pomodoro-trigger') || document.getElementsByClassName('pomodoro-trigger')[0],
    banner = document.querySelector('.pomodoro-banner') || document.getElementsByClassName('pomodoro-banner')[0],
    // background_circle = document.getElementsByTagName('circle')[0] || document.querySelectorAll('circle')[0],
    progress_circle = document.getElementsByTagName('circle')[1] || document.querySelectorAll('circle')[1];
  // let radius = progress_circle.getAttribute('r');
  let current, start, end;
  let percent;

  let trigger_status = false;

  banner.innerHTML = SETTINGS.duration + ':00';

  trigger.onclick = triggerHandler;
  trigger.ontap = triggerHandler;

  setInterval(() => {
    current = moment();
    progressUpdater(current);
    if (start) timeCounter();
  }, 16);

  function triggerHandler() {
    trigger_status = !trigger_status;
    let icon = document.querySelector('.pomodoro-trigger').querySelector('.material-icons');
    icon.setAttribute('data-trigger', trigger_status);
    trigger_status ? icon.innerHTML = 'pause' : icon.innerHTML = 'play_arrow';
    start = moment();
    end = moment().add(SETTINGS.duration, 'minutes');
  }

  function progressUpdater(current) {
    let timepass = current.diff(start, 'seconds');
    percent = 1 - timepass / (60 * SETTINGS.duration);
    let perimeter = Math.PI * 2 * 175;
    let lt = perimeter * percent,
      rt = perimeter * (1 - percent);
    // console.log(timepass, percent);
    if (percent >= 0) {
      progress_circle.setAttribute('stroke-dasharray', lt + ' ' + rt);
    }
    if (percent <= 0) {
      // document.querySelector('.wrapper').style.background = '#292929';
      document.querySelector('.mask').style.opacity = '1';
      document.querySelector('.mask').style.transform = 'scale(100)';
      trigger.querySelector('.material-icons').style.color = '#292929';
    } else {
      document.querySelector('.mask').style.opacity = '0';
      document.querySelector('.mask').style.transform = 'scale(1)';
      // document.querySelector('.wrapper').style.background = SETTINGS.theme;
      trigger.querySelector('.material-icons').style.color = SETTINGS.theme;
    }
  }

  function timeCounter() {
    let m = end.diff(current, 'minutes'),
      s = end.diff(current, 'seconds') % 60;
    if (m >= 0 && s >= 0) {
      s < 10 ? s = '0' + s : s += '';
      banner.innerHTML = m + ':' + s;
    }
  }
})();
