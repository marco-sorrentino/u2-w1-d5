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

const m = document.querySelectorAll("g");

setInterval(function () {
  appear(), disappear();
}, Infinity);

const appear = () => {
  m.forEach((el) => {
    const randomM = m[Math.floor(Math.random() * m.length)];
    randomM.style.opacity = "1";
  });
};

const disappear = () => {
  m.forEach((el) => {
    const randomM = m[Math.floor(Math.random() * m.length)];
    randomM.style.opacity = "0";
  });
};
