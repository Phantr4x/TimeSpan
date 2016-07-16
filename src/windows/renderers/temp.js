var canvas = document.getElementById('pomodoro-timer');
var ctx = canvas.getContext('2d');
// var imgData = null;

// var prc = canvas.getAttribute('data-process');
var bgColor = canvas.getAttribute('data-bgcolor');
var fiColor = canvas.getAttribute('data-ficolor');
var w = canvas.width;
var h = canvas.height;

var lineWid = 7;
var lineCap = 'round';

var AUC = null,
    AUP = null,
    timer = null;
var pmdrSpan = 25;

var trigger = document.getElementById('pomodoro-trigger');

var current = null,
    endtime = null,
    timestamp = null,
    timepass = null,
    prcRemain = null;

timer = setInterval(() => {
  current = moment();
  // endtime = current.add('25', 'm');
  if (timestamp !== null) {
    timepass = current.diff(timestamp, 'seconds');
    autoUpdateProgress(timepass);
    timeCounter();
  }
}, 50)


trigger.onclick = (event) => {
  timestamp = moment();
  endtime = moment().add(pmdrSpan, 'm');
}

function timeCounter() {
  let m = endtime.diff(current, 'minutes'),
      s = endtime.diff(current, 'seconds')%60;
      // ms = endtime.diff(current, 'milliseconds').toString().slice(4);
  let pmdrText;
  if (s < 10 && s >= 0) {
    pmdrText = m + ":0" + s;
  } else {
    pmdrText = m + ":" + s;
  }
  document.getElementById('pomodoro-banner').innerHTML = pmdrText;
  // console.log(m, s, ms);
}

function autoUpdateProgress(time) {
  prcRemain = (1 - (time / (60 * pmdrSpan))) * 100;
  // console.log(prcRemain);
  AUP = setInterval(() => {
    if (prcRemain >= 0 && prcRemain <= 100) {
      canvas.setAttribute('data-process', prcRemain);
    }
  }, 50);
}

function draw(ctx, w = 360, h = 360, prc = 0, bg = '#FFF', fi = '#000', wid = 7, cap = 'round') {
  // 画背景环
  // ctx.beginPath();
  // ctx.arc(w/2, h/2, 180-wid/2, 0, Math.PI*2);
  // ctx.lineWidth = wid;
  // ctx.lineCap = cap;
  // ctx.strokeStyle = bg;
  // ctx.stroke();
  // // 画进度环
  // ctx.beginPath();
  // ctx.arc(w/2, h/2, 180-wid/2, -Math.PI/2, 2*(1-prc/100)*Math.PI-Math.PI/2, true);
  // ctx.lineWidth = wid;
  // ctx.lineCap = cap;
  // ctx.strokeStyle = fi;
  // ctx.stroke();

  // 画背景环
  ctx.beginPath();
  ctx.arc(w/2, h/2, w/2, -Math.PI/2, Math.PI*1.5);
  ctx.closePath();
  ctx.fillStyle = '#e53935';
  ctx.fill();
  // 画进度环
  ctx.beginPath();
  ctx.moveTo(w/2, h/2);
  ctx.arc(w/2, h/2, w/2, -Math.PI/2, 2*(1-prc/100)*Math.PI-Math.PI/2, true);
  ctx.closePath();
  ctx.fillStyle = fi;
  ctx.fill();
  // 画内填充圆
  ctx.beginPath();
  ctx.arc(w/2, h/2, w/2-wid, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#F44336";
  ctx.fill();
}

function autoUpdateCanvas() {
  AUC = setInterval(() => {
    let prc = canvas.getAttribute('data-process');
    if (prc >= 0) {
      draw(ctx, w, h, prc, bgColor, fiColor, lineWid, lineCap);
    }
  }, 50);
}



autoUpdateCanvas();

current = null;
timestamp = null;
timepass = null;
prcRemain = null;
