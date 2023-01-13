const scrollTrigger = 60;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("active");
    document.getElementById("ctaOne").classList.add("greenCta");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("active");
    document.getElementById("ctaOne").classList.remove("greenCta");
  }
};
