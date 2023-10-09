(function($) {
  "use strict";

  var fullHeight = function() {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function() {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function() {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>",
        "<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  };
  carousel();
})(jQuery);

$(function() {
  var owl = $(".owl-1");
  owl.owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: false,
    navText: [
      '<span class="icon-keyboard_arrow_left">',
      '<span class="icon-keyboard_arrow_right">'
    ]
  });

  var carousel_nav_a = $(".carousel-nav a");

  carousel_nav_a.each(function(slide_index) {
    var $this = $(this);
    $this.attr("data-num", slide_index);
    $this.click(function(e) {
      owl.trigger("to.owl.carousel", [slide_index, 1500]);
      e.preventDefault();
    });
  });

  owl.on("changed.owl.carousel", function(event) {
    carousel_nav_a.removeClass("actives");
    $(".carousel-nav a[data-num=" + event.item.index + "]").addClass("actives");
  });
});

$(window).on("load scroll", function() {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("header-active");
    $("nav").removeClass("nav_custom_scroll");
  } else {
    $("header").removeClass("header-active");
    $("nav").addClass("nav_custom_scroll");
  }

  var scrollToTop = $(".top_button_page");
  if ($(window).scrollTop() > 700) {
    scrollToTop.show();
  } else {
    scrollToTop.hide();
  }

  $(".top_button_page").click(function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  $(".icon-open").click(function() {
    $("#social-icon").toggleClass("d-none");
  });
  $(".logo-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });

  $("#show_form").click(function(e) {
    e.preventDefault();
    $("#form").removeClass("d-none");

    $(this).addClass("d-none");
  });
});
