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

const m = document.querySelectorAll("path");

setInterval(function () {
  appear();
}, 500);

const appear = () => {
  m.forEach((el) => {
    const randomM = m[Math.floor(Math.random() * m.length)];
    randomM.style.opacity = "1";
  });
};

setInterval(function () {
  disappear();
}, 100);

const disappear = () => {
  m.forEach((el) => {
    const randomM = m[Math.floor(Math.random() * m.length * 2)];
    randomM.style.opacity = "0";
  });
};
