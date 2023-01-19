$(function () {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 1 - (1 - now) * 0.2;
          left = now * 50 + "%";
          opacity = 1 - now;
          current_fs.css({ transform: "scale(" + scale + ")" });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 00,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );
  });

  $(".previous").click(function () {
    if (animating) return false;
    animating = true;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    previous_fs.show();
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 0.8 + (1 - now) * 0.2;
          left = (1 - now) * 50 + "%";
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity,
          });
        },
        duration: 00,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );
  });

  $(".submit").click(function () {
    return true;
  });
});
// ===================Multi stpe form end===============
$(document).ready(function () {
  $(".serch_btn").click(function () {
    $(".search_field ").slideToggle("300");
  });
});
// ================Scroll=============
$("#patnar").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#mypatner").offset().top,
    },
    "slow"
  );
});
// ====================Accordion================
$(function () {
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".dropdown_toggle").click(function () {
    $(".dropdown ").slideToggle("300");
  });
});

// ==================Drop down=============

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".nav_black ").css("background", "#021D3A");
    } else {
      $(".nav_black ").css("background", "");
    }
  });
});

// ==========Nav scroll===============
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// =================Swiper-js==========
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// ==============Testimonila===============
var swiper = new Swiper(".testSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==============Search-toggle============

// =============Counter===========
$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }
  //Count up code
  function countUp() {
    $(".counter").each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".counter")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  });
});

// =============================Multistep-form==========
