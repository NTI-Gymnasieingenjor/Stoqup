(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 81
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

$("[data-trigger]").on("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  var offcanvas_id =  $(this).attr('data-trigger');
  $(offcanvas_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
  $(".screen-overlay").toggleClass("show");
}); 

$(".btn-close, .screen-overlay").click(function(e){
  $(".screen-overlay").removeClass("show");
  $(".mobile-offcanvas").removeClass("show");
  $("body").removeClass("offcanvas-active");
}); 

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#navbar_main").offset().top > 100) {
      $("#navbar_main").addClass("navbar-scrolled");
    } else {
      $("#navbar_main").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $('body').scrollspy({ 
    target: '#navbar_main',
    offset: 150
});


// Cookies
$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 1000);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 

// Sample sender
function remove() {
  var x = document.getElementById("sample-button");
  x.style.display === "block" ? x.style.display = "none": x.style.display = "none";
}
// Thank you text
function thankyou() {
  let allAreFilled = true;
  document.getElementById("sign-up-form").querySelectorAll("[required]").forEach(function(i) {
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
    if (i.type === "radio") {
      let radioValueCheck = false;
      document.getElementById("sign-up-form").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
        if (r.checked) radioValueCheck = true;
      })
      allAreFilled = radioValueCheck;
    }
  })
  if (!allAreFilled) {
    console.log("fill filed");
  }else{
    var y = document.getElementById("sign-up-form")
    var x = document.getElementById("thank-you");
    x.style.display === "none" ?(x.style.display = "block",y.style.display = "none") : (y.style.display = "none",x.style.display = "block");
  }
};
// Feedback 
function thumb(k,l){
  var showform = document.getElementById('feedform');
  k.style.height === "8rem" ? (
    k.style.height = "7rem",
    k.style.width = "7rem",
    k.style.fontSize = "2.25rem",
    showform.style.display = 'none'
  ):
  (
    k.style.height = "8rem",
    k.style.width = "8rem",
    k.style.fontSize = "2.5rem",
    l.style.height = "7rem",
    l.style.width = "7rem",
    l.style.fontSize = "2.25rem",
    showform.style.display = 'block'
  );
};
function feedback(rate){
var x = document.getElementById("fb-up");
var y = document.getElementById("fb-down");
rate ? (k = x, l = y ):(k = y, l = x);
thumb(k,l);
};
