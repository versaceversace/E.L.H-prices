$(document).ready(function(){
   $('.tooltipped').tooltip({delay: 50, tooltip: 'some text', html: true});
   $('.parallax').parallax();
 });
 var options = [
   {selector: '#first', offset: 400, callback: function(el) {
   Materialize.showStaggeredList($(el));
 } },
 {selector: '#second', offset: 300, callback: function(el) {
  Materialize.showStaggeredList($(el));
} },
{selector: '#third', offset: 300, callback: function(el) {
 Materialize.showStaggeredList($(el));
} },
{selector: '#fourth', offset: 300, callback: function(el) {
 Materialize.showStaggeredList($(el));
} }
];
Materialize.scrollFire(options);
