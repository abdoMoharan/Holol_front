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
    carousel_nav_a.removeClass("active");
    $(".carousel-nav a[data-num=" + event.item.index + "]").addClass("active");
  });
});
