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

let weddingComponents = $(".wedding-component")

let dropDown = $(".dropdown");

weddingComponents.hide();

console.log(weddingComponents)


dropDown.click(function(event){
  let button = event.target.innerHTML;
  console.log(button)
  if (button === "The Wedding"){
    $("#party").hide()
    $("#travel").hide()
    $("#wedding").slideToggle();
  } else if (button === "Meet the Wedding Party"){
    $("#wedding").hide()
    $("#travel").hide()
    $("#party").slideToggle();
  } else if (button === "Travel &amp; Accommodations"){
    $("#party").hide()
    $("#wedding").hide()
    $("#travel").slideToggle();
  }
})

});//bottom
