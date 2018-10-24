var $svg = $('svg').drawsvg({
  duration: 3000
});
$svg.drawsvg('animate');

var $doc = $(document),
  $win = $(window),
  $svg = $('svg').drawsvg(),
  max = $doc.height() - $win.height();

$win.on('scroll', function () {
  var p = $win.scrollTop() / max;
  // $svg.drawsvg('progress', p);
  if (p > 0.30 && p < 0.31) {
    var $svg = $('svg').drawsvg({
      duration: 3000
    });
    $svg.drawsvg('animate');
  }
});