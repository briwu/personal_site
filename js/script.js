function clickMenu() {
  const menu = document.querySelector(".hamburger-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Coder", "Student", "Explorer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    showCursor: false,
  };

  var typed = new Typed(".section-text-p2", options);
});
