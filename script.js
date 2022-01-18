$(document).ready(function() {
  $(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      loop: true,
      nav: false,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autplayTimeout: 4,
    });
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



