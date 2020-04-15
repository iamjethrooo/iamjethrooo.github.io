// Typewriter effect on landing page
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Hamburger menu
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".bar").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $("menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function () {
    var anchor = $(this).attr("href");
    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top,
      },
      800
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true /* Animation only runs once */,
  });
});

let navbar = document.getElementById("top-nav");
let sticky = navbar.offsetTop + 100;

// Link Highlighting on Scroll
function onScroll(event) {
  // Sticky navbar
  if (
    getComputedStyle(document.getElementById("menu-toggler"), null).display ==
    "none"
  ) {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  } else {
    navbar.classList.remove("sticky");
  }

  let scrollPos = $(document).scrollTop();

  $("nav a").each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (
      refElement.position().top - 100 <= scrollPos &&
      refElement.position().top + refElement.height() >= scrollPos
    ) {
      $("nav a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

const FILTER_BUTTONS = document.querySelectorAll(".filter");

function filter(className) {
  let items = document.querySelectorAll(".portfolio-item");

  // Every item has this class, so every item will be visible if this method is run
  if (className == "portfolio-item") {
    items.forEach((item) => {
      item.style.display = "inline-flex";
    });
    return;
  }

  items.forEach((item) => {
    if (item.classList[0] != className) {
      item.style.display = "none";
    } else {
      item.style.display = "inline-flex";
    }
  });
}

FILTER_BUTTONS.forEach((filterButton) => {
  filterButton.addEventListener("click", (e) => {
    FILTER_BUTTONS.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });
    filterButton.classList.toggle("active");
    let className = e.target.getAttribute("data-filter");
    filter(className);
  });
});

const INPUTS = document.querySelectorAll(".input");

INPUTS.forEach((input) => {
  console.log(input.parentElement);
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focus");
  });
  input.addEventListener("blur", () => {
    console.log(input.value);
    if (input.value === "") {
      input.parentElement.classList.remove("focus");
    }
  });
});
