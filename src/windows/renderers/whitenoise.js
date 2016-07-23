'use strict';

(() => {
  var item = document.getElementsByClassName('whitenoise-item');
  // var icon = document.querySelectorAll('.whitenoise-icon')[0];
  item.onclick = (event) => {
    console.log(this);
    this.getElementsByClassName('.whitenoise-audioplayer')[0].getElementsByTagName('audio').play();
  };

})();
