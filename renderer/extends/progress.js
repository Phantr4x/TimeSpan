;
(function ($) {
  $.fn.progressInit = function() {
    var defaultOpt = {
      trackColor: '#fff',
      progressColor: '#000',
      min: 18,
      sec: 00,
      percent: 50,
      duration: 1500
    }; // 默认选项
    $(this).each(function() {
      var _this = $(this);
      var color = _this.data('color'),
          min = defaultOpt.min,
          sec = defaultOpt.sec,
          percent = parseInt(_this.data('percent'), 10),
          duration = parseFloat(_this.data('duration'), 10) * 1000;
      var trackColor, progressColor;
      if (color && color.split(',').length === 2) {
        var colorSet = color.split(',');
        trackColor = colorSet[0];
        progressColor = colorSet[1];
      } else {
        trackColor = defaultOpt.trackColor;
        progressColor = defaultOpt.progressColor;
      }
      if (!duration)
        duration = defaultOpt.duration;
      if (!percent)
        percent = defaultOpt.percent;

      _this.append('<div class="progress-track"></div><div class="progress-left"></div><div class="progress-right"></div><div class="progress-cover"></div><div class="progress-text"><span class="progress-min">' + min +'</span><span class="progress-sec">' + sec + '</span></div>');
      var x = _this.find('.progress-cover').height(); // 触发 Layout

      _this.find('.progress-track, .progress-cover').css('border-color', trackColor);
      _this.find('.progress-left, .progress-right').css('border-color', progressColor);

      _this.find('.progress-left').css({
        'transform': 'rotate(' + percent * 3.6 + 'deg)',
        '-o-transform': 'rotate(' + percent * 3.6 + 'deg)',
        '-ms-transform': 'rotate(' + percent * 3.6 + 'deg)',
        '-moz-transform': 'rotate(' + percent * 3.6 + 'deg)',
        '-webkit-transform': 'rotate(' + percent * 3.6 + 'deg)',
        'transition': 'transform ' + duration + 'ms linear',
        '-o-transition': '-o-transform ' + duration + 'ms linear',
        '-ms-transition': '-ms-transform ' + duration + 'ms linear',
        '-moz-transition': '-moz-transform ' + duration + 'ms linear',
        '-webkit-transition': '-webkit-transform ' + duration + 'ms linear'
      });

      if (percent > 50) {
        var animation = 'toggle ' + (duration * 50 / percent) + 'ms'
        _this.find('.progress-right').css({
          'opacity': 1,
          'animation': animation,
          'animation-timing-function': 'step-end'
        });
        _this.find('.progress-cover').css({
          'opacity': 0,
          'animation': animation,
          'animation-timing-function': 'step-start'
        });
      }
    });
  }
})(jQuery);
