$(function() {
  $("#mainCarousel").owlCarousel({
    navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      lazyLoad : true,
      loop:true,
      dots:true,
      dotsEach:true,
      singleItem : true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      items : 1
        });
});
