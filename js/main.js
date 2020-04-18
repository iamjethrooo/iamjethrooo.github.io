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
  initModals();
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
    $("menu-toggler").removeClass("open");
    $(".bar").removeClass("open");
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
    duration: 1000,
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

// Code to make label float when input element has focus
const INPUTS = document.querySelectorAll(".input");

INPUTS.forEach((input) => {
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

/* Template for modal items
itemName: {
  title: "",
  tag: "",
  detail: "",
  repo: "",
  demo: "",
  package: ""
}
*/
function initModals() {
  let modalItem = {
    calculator: {
      title: "Calculator",
      tag: "Javascript & Java",
      detail:
        "Calculators that I made. One is a web version using JavaScript, and one is a desktop version using Java.",
      repo: {
        language: "JavaScript",
        link: "https://github.com/iamjethrooo/calculator",
      },
      repo2: {
        language: "Java",
        link: "https://github.com/iamjethrooo/java-gui-calculator",
      },
      demo: "https://iamjethrooo.github.io/calculator",
      image: "calculator/1.png",
    },
    etchasketch: {
      title: "Etch a Sketch",
      tag: "JavaScript",
      detail: "",
      repo: "https://github.com/iamjethrooo/etch-a-sketch",
      demo: "https://iamjethrooo.github.io/etch-a-sketch/",
      image: "etch-a-sketch/1.png",
    },
    rockpaperscissors: {
      title: "Rock Paper Scissors",
      tag: "JavaScript",
      detail: "",
      repo: "https://github.com/iamjethrooo/rock-paper-scissors",
      demo: "https://iamjethrooo.github.io/rock-paper-scissors/",
      image: "rock-paper-scissors/1.png",
    },
    visualdesign: {
      title: "WALA PA PO HAHAHA",
      detail: "IYAK",
    },
  };

  const GALLERY_BUTTONS = document.querySelectorAll("#gallery .button");
  GALLERY_BUTTONS.forEach((galleryButton) => {
    galleryButton.addEventListener("click", () => {
      fillModal(galleryButton.id);
      document.querySelector(".modal-wrap").style.display = "flex";
    });
  });
  const DEMO_ICON_CLASS = "fa-external-link-alt";
  const GITHUB_ICON_CLASS = "fa-github";

  const MODAL_BUTTON = document.querySelector("#modal-button");
  function fillModal(id) {
    document.querySelector(".info-box .title").textContent =
      modalItem[`${id}`].title;
    if (modalItem[`${id}`].tag) {
      document.querySelector(".info-box .tag").textContent =
        modalItem[`${id}`].tag;
    }
    document.querySelector(".info-box .detail").textContent =
      modalItem[`${id}`].detail;

    if (modalItem[`${id}`].image) {
      document.querySelector(".carousel-image").src =
        "images/projects/" + modalItem[`${id}`].image;
    } else {
      document.querySelector(".carousel-image").style.display = "none";
    }

    if (modalItem[`${id}`].demo) {
      let anchorButton = document.createElement("a");
      anchorButton.target = "_blank";
      anchorButton.classList.add("button");
      anchorButton.href = modalItem[`${id}`].demo;
      let demoIcon = document.createElement("i");
      demoIcon.classList.add("fas");
      demoIcon.classList.add(DEMO_ICON_CLASS);
      anchorButton.appendChild(demoIcon);
      anchorButton.appendChild(document.createTextNode("demo"));
      MODAL_BUTTON.appendChild(anchorButton);
    }

    if (modalItem[`${id}`].repo) {
      let anchorButton = document.createElement("a");
      anchorButton.target = "_blank";
      let textNode;
      anchorButton.classList.add("button");
      if (modalItem[`${id}`].repo.language) {
        textNode = document.createTextNode(
          `repo (${modalItem[`${id}`].repo.language})`
        );
        anchorButton.href = modalItem[`${id}`].repo.link;
      } else {
        textNode = document.createTextNode("repo");
        anchorButton.href = modalItem[`${id}`].repo;
      }
      let githubIcon = document.createElement("i");
      githubIcon.classList.add("fab");
      githubIcon.classList.add(GITHUB_ICON_CLASS);
      anchorButton.appendChild(githubIcon);
      anchorButton.appendChild(textNode);
      MODAL_BUTTON.appendChild(anchorButton);
    }

    if (modalItem[`${id}`].repo2) {
      let anchorButton = document.createElement("a");
      anchorButton.target = "_blank";
      let textNode;
      anchorButton.classList.add("button");
      if (modalItem[`${id}`].repo2.language) {
        textNode = document.createTextNode(
          `repo (${modalItem[`${id}`].repo2.language})`
        );
        anchorButton.href = modalItem[`${id}`].repo2.link;
      } else {
        anchorButton.href = modalItem[`${id}`].repo2;
      }
      let githubIcon = document.createElement("i");
      githubIcon.classList.add("fab");
      githubIcon.classList.add(GITHUB_ICON_CLASS);
      anchorButton.appendChild(githubIcon);
      anchorButton.appendChild(textNode);
      MODAL_BUTTON.appendChild(anchorButton);
    }
  }

  function clearModalButtons() {
    while (MODAL_BUTTON.firstChild) {
      MODAL_BUTTON.removeChild(MODAL_BUTTON.lastChild);
    }
  }

  const CLOSE_BUTTON = document.querySelector(".close");

  CLOSE_BUTTON.addEventListener("click", () => {
    document.querySelector(".modal-wrap").style.display = "none";
    clearModalButtons();
  });
}
