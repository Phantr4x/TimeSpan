'use strict';

(() => {
  var item = document.querySelectorAll('.whitenoise-playpause');
  // var icon = document.querySelectorAll('.whitenoise-icon')[0];
  item.forEach((element, index, array) => {
    // console.log(element);
    element.onclick = () => {
      // console.log(element.parentNode.childNodes[1]);
      element.getAttribute('data-switch') === 'true'
        ? element.setAttribute('data-switch', 'false')|| element.parentNode.parentNode.classList.remove('whitenoise-active') || element.parentNode.childNodes[1].pause()
        : element.setAttribute('data-switch', 'true') || element.parentNode.parentNode.classList.add('whitenoise-active') || element.parentNode.childNodes[1].play();
      // console.log(element.getAttribute('data-switch'));
    }
  });

  var scrollLeft = document.getElementById('whitenoise-scroll-left'),
    scrollRight = document.getElementById('whitenoise-scroll-right');
  scrollRight.onclick = (event) => {
    event.preventDefault();
    scrollRight.style.display = 'none';
    scrollLeft.style.display = 'inline-block';
    document.querySelector('.whitenoise-carousel-slides').style.left = '-300px';
  }
  scrollLeft.onclick = (event) => {
    event.preventDefault();
    scrollLeft.style.display = 'none';
    scrollRight.style.display = 'inline-block';
    document.querySelector('.whitenoise-carousel-slides').style.left = '0px';
  }
})();
