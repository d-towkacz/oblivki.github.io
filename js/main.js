(function ($) {
  "use strict";
  // var url = window.location.hash;
  // var hash = url.substring(url.indexOf('#')+1);
  // if (hash =="style1")
  // {
  //     $('head').append('<link rel="stylesheet" type="text/css" href="css/style1.css">');
  // }
  // if (hash =="style2")
  // {
  //     $('head').append('<link rel="stylesheet" type="text/css" href="css/style2.css">');
  // }
  // if (hash =="style3")
  // {
  //     $('head').append('<link rel="stylesheet" type="text/css" href="css/style3.css">');
  // }
  // console.log(hash);

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  //new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('ion-toggle-filled ion-toggle');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
    formatter: function (n) {
      //n = n.replace('0000000', '0 000 000');
      n = n.replace('70000000', '70 000 000');
      n = n.replace('24', '24/7');
      n = n.replace('25', '25<i class="fa fa-rub" aria-hidden="true" style="font-size:20px;"></i>');
      n = n.replace('35', '3,5<i class="fa fa-rub" aria-hidden="true" style="font-size:20px;"></i>');
      return n;
    }
  });

  $(".testimonials-carousel").owlCarousel({
    animateOut: 'fadeOutDownBig',
    animateIn: 'fadeInUpBig',
    autoplay: false,
    dots: true,
    loop: true,
    items: 1,
    //smartSpeed:3600,
    //fluidSpeed:2000,
    //autoplaySpeed:2000,
    //autoplayTimeout:6000,
    //responsive: { 0: { items: 3 }, 768: { items: 5 }, 900: { items: 5 }
    //}
  });


  $(".devices-carousel").owlCarousel({
    //animateOut: 'fadeOutDownBig',
    //animateIn: 'fadeInUpBig',
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    //smartSpeed:3600,
    //fluidSpeed:2000,
    //autoplaySpeed:2000,
    //autoplayTimeout:6000,
    //responsive: { 0: { items: 3 }, 768: { items: 5 }, 900: { items: 5 }
    //}
  });

  $(".quotes-carousel").owlCarousel({
    animateOut: 'bounceOutLeft',
    animateIn: 'bounceInRight',
    autoplay: true,
    nav:true,
    dots: false,
    loop: true,
    items: 1,
    smartSpeed:10600,
    fluidSpeed:10000,
    autoplaySpeed:10000,
    autoplayTimeout:10000,
    //responsive: { 0: { items: 3 }, 768: { items: 5 }, 900: { items: 5 }
    //}
  });

  // Testimonials carousel (uses the Owl Carousel library)
  var headerCar = $(".header-carousel");
  headerCar.owlCarousel({
    animateOut: 'bounceOutRight',
    animateIn: 'bounceInLeft',
    autoplay: false,
    dots: true,
    loop: true,
    items: 1,
    reverse:1,
    smartSpeed:3600,
    fluidSpeed:2000,
    autoplaySpeed:2000,
    autoplayTimeout:12000,
    //autoWidth:1,
  });
  headerCar.on('changed.owl.carousel',function(e) {
    //console.log(e.currentTarget);

    // var $svg = $(e.currentTarget).find('svg').drawsvg({
    //   duration:400,
    // });
    // $svg.drawsvg('animate');
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    smartSpeed:2000,
    fluidSpeed:3500,
    autoplaySpeed:3500,
    autoplayTimeout:9000,
    responsive: { 0: { items: 3 }, 768: { items: 6 }, 900: { items: 6 }
    }
  });

   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();

   // var $svg = $('svg').drawsvg({
   //   duration: 2000,
   //   stagger: 500,
   // });
   //
   // $svg.drawsvg('animate');
	//$('#video-bg').bgVideo({
  //  pausePlayXPos: 'center', // left|right|center
	//  pausePlayYPos: 'bottom', // top|bottom|center
  //});



//
//   var $doc = $(document),
//     $win = $(window),
//     $svg = $('.svg-area svg').drawsvg(),
//     max = $doc.height() - $win.height();
//
// $win.on('scroll', function() {
//   var p = ($win.scrollTop() / max) - 0.35;
//   $svg.drawsvg('progress', p);
//   console.log(p);
// });




$('#intro').vide({
  "mp4":"video/video-back2.mp4"
},{
  className: 'back-video'
}
);


$("#ancrus, .link-contries-map:eq(0)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#ancrus").css({"opacity":"1"});
     $(".link-contries-map:eq(0)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(0)").removeClass('hover');
});

$("#anckz, .link-contries-map:eq(2)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#anckz").css({"opacity":"1"});
     $(".link-contries-map:eq(2)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(2)").removeClass('hover');
});

$("#ancua, .link-contries-map:eq(1)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#ancua").css({"opacity":"1"});
     $(".link-contries-map:eq(1)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(1)").removeClass('hover');
});


$("#ancby, .link-contries-map:eq(3)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#ancby").css({"opacity":"1"});
     $(".link-contries-map:eq(3)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(3)").removeClass('hover');
});

$("#ancde, .link-contries-map:eq(4)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#ancde").css({"opacity":"1"});
     $(".link-contries-map:eq(4)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(4)").removeClass('hover');
});


$("#ancus, .link-contries-map:eq(5)").hover(function(){
     $("#chartdiv svg path").css({"opacity":"0.2"});
     $("#ancus").css({"opacity":"1"});
     $(".link-contries-map:eq(5)").addClass('hover');
}, function(){
     $("#chartdiv svg path").css({"opacity":"1"});
     $(".link-contries-map:eq(5)").removeClass('hover');
});


// ancde


$("#chartdiv svg path").click(function(e) {
  $("#Layer_1 path").removeAttr("style");
  var $this = $(this);
  var bbox = this.getBBox();
  var centreX = bbox.x + bbox.width/2;
  var centreY = bbox.y + bbox.height/2;
  $this.css("transform-origin", centreX + 'px ' + centreY + 'px');
  $this.css("transform", "scale(2)");
  $this.css("stroke", "white");
  $this.css("fill", "green");
  this.parentElement.appendChild(this);
});


// $('.icon-svg-header').hover(function(){
//   var $svg = $(this).find('svg').drawsvg();
//   $svg.drawsvg('animate');
// }, function(){
//
// });

// var player = $('#module-video').YTPlayer({
//   fitToBackground: false,
//   videoId: 'BAVfUvByStY',
//   pauseOnScroll: false,
//   playerVars: {
//     modestbranding: 0,
//           autoplay: 1,
//           controls: 0,
//           showinfo: 0,
//           branding: 0,
//           rel: 0,
//           autohide: 0
//   },
//   callback: function() {
//     $("#module-video").css({"opacity":"0.3","position":"absolute"});
//     //player.playVideo();
//     headerCar.trigger('play.owl.autoplay');
//
//   },
// });


})(jQuery);
