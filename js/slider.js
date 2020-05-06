"use strict";

class Slider {
  constructor() {
    var def = {
      target: document.querySelector(".slides"),
      dotsWrapper: document.querySelector(".dots-wrapper"),
      arrowLeft: document.querySelector(".arrow-left"),
      arrowRight: document.querySelector(".arrow-right"),
      transition: {
        speed: 300,
        easing: ""
      },
      swipe: true
    };

    var curSlide = 0;

    function buildDots() {
      for (var i = 1; i <= totalSlides; i++) {
        var dot = document.createElement("li");
        dot.setAttribute("data-slide", i);
        def.dotsWrapper.appendChild(dot);
      }

      def.dotsWrapper.addEventListener(
        "click",
        function(e) {
          if (e.target && e.target.nodeName == "LI") {
            var dotIndex = e.target.getAttribute("data-slide");
            gotoSlide(dotIndex - 1);
          }
        },
        false
      );
    } // buildDots()

    function initArrows() {
      if (def.arrowLeft != "") {
        def.arrowLeft.addEventListener(
          "click",
          function() {
            if (curSlide < 1) {
              curSlide = totalSlides;
            }
            curSlide--;
            gotoSlide(curSlide);
          },
          false
        );
      }

      if (def.arrowRight != "") {
        def.arrowRight.addEventListener(
          "click",
          function() {
            if (curSlide >= totalSlides - 1) {
              curSlide = 0;
            } else {
              curSlide++;
            }

            gotoSlide(curSlide);
          },
          false
        );
      }
    }

    function gotoSlide(index) {
      var slides = document.getElementsByClassName("slide");
      var dots = def.dotsWrapper.getElementsByTagName("li");

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      curSlide = index;

      slides[index].style.display = "block";
      dots[index].className += " active";
    }

    var totalSlides = document.querySelectorAll(".slide").length;
    buildDots();
    initArrows();
    gotoSlide(0);
  }
}
