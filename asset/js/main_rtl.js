$(function() {
  var owl = $(".owl-1");
  owl.owlCarousel({
    rtl: true,
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
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        // tablet
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        // mobile portrait
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $("#show_form").click(function(e) {
    e.preventDefault();
    $("#form").removeClass("d-none");

    $(this).addClass("d-none");
  });

  // Get the current year
  var currentYear = new Date().getFullYear();

  // Set the current year in the footer
  document.getElementById("current-year").textContent = currentYear;

  AOS.init({
    duration: 1500,
    delay: 400
  });
});
