"use strict";

var slideIndex = 1;

var timer;

var slideshowContainer;

class Slider {
  constructor() {
    this.def = {
      target: $(".slides"),
      dotsWrapper: $(".dots-wrapper"),
      arrowLeft: $(".arrow-left"),
      arrowRight: $(".arrow-right")
    };

    function buildDots(totalSlides) {
      for (var i = 0; i < totalSlides; i++) {
        var dot = document.createElement("li");
        dot.setAttribute("data-slide", i + 1);
        document.querySelector(".dots-wrapper").appendChild(dot);
      }
    }

    this.totalSlides = document.querySelectorAll(".slide").length;
    buildDots(this.totalSlides);
  }
}
