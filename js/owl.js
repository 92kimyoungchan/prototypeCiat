$(document).ready(function() {

  $(".owlc2").owlCarousel({

    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    margin: 20,
    loop: true,
    dots: false,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      481: {
        items: 2,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      992: {
        items: 5,
        nav: true,
        loop: true
      }
    },
    singleItem: true,
    items: 5,
    nav: true, // Show next and prev buttons
    navText: [
      "<img src='images/main/left-arrow.png'/>",
      "<img src='images/main/right-arrow.png'/>"
    ]


  });


});
