
var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

  $(document).ready(function(){
    $("#start").click(function(){
      $("#contactForm").slideDown("slow");
     $("#start").hide();
    });
  });

  $('#GoToAbout').click(function () {
    $.scrollTo('.about', 1000)
  })

  $('#GoToContact').click(function () {
    $.scrollTo('.contact', 1000)
  })

  $('#GoToServices').click(function () {
    $.scrollTo('.services', 1000)
  })
  
 
  