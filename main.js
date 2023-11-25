const loader = document.querySelector(".loader");
const load = document.querySelector(".load");
window.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("load-hidden");
  load.classList.add("load-hidden");
  load.addEventListener("transitionend", () => {
    document.body.removeChild(load);
  });
});

// popup
const img = document.querySelectorAll(".pro-item picture img");
const popup = document.querySelector(".section2");
const overlay = document.querySelector(".overlay");
const image1 = document.querySelector(".popue figure img");
console.log(img);
img.forEach((image) => {
  image.addEventListener("click", () => {
    popup.classList.add("section1-visible");
    image1.src = image.src
  });
});
overlay.addEventListener("click", () => {
  popup.classList.remove("section1-visible");
});

