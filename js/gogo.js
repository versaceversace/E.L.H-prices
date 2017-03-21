$(document).ready(function(){
   $('.tooltipped').tooltip({delay: 50, tooltip: 'some text', html: true});
   $('.carousel.carousel-slider').carousel({fullWidth: true});

 });
 var options = [
   {selector: '#staggered-test', offset: 400, callback: function(el) {
   Materialize.showStaggeredList($(el));
 } },
 {selector: '#iconset', offset: 300, callback: function(el) {
  Materialize.showStaggeredList($(el));
} }
];
Materialize.scrollFire(options);
