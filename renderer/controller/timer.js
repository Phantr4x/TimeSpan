"use strict";

class Timer {
  constructor() {
    this.createCanvas();
    console.log("timer");
  }

  init() {

  }

  createCanvas() {
    var bg = document.getElementById('progress');
    var ctx = bg.getContext('2d');
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;
    var imd = null;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;

    ctx.beginPath();
    ctx.strokeStyle = '#99CC33';
    ctx.lineCap = 'square';
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 10.0;

    imd = ctx.getImageData(0, 0, 240, 240);
    this._drawCanvas(ctx, current, imd, quart, circ);
    // draw(0.6);
    var t=0;
    var timer=null;

    this._loadCanvas(0.8, t, timer);
    timer=null;
  }

  _drawCanvas(ctx, crt, imd, qrt, cir) {
    ctx.putImageData(imd, 0, 0);
    ctx.beginPath();
    ctx.arc(120, 120, 70, -(qrt), ((cir) * crt) - qrt, false);
    ctx.stroke();
  }

  _loadCanvas(now, t, timer) {
    timer = setInterval(function(){
      if(t>now){
        clearInterval(timer);
      }else{
        draw(t);
        t+=0.01;
      }
    },20);
  }
}

module.exports = Timer;
