"use strict"; $(function(){

$(document).ready(function(){
  console.log('js loaded')
  $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
  full_width: true,
  indicators: true,
  dist: 0
});


$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);

});//bottom
