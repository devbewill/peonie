// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";


function scrollNav() {
    $('.nav a, .go-down').on("click", function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop(true).animate({
        scrollTop: $($(this).attr('href')).offset().top - 0
      }, 500);
      return false;
    });
  }
  scrollNav();
