const swiperContainer = document.querySelector(".swiper-container");
const arrowsBtn = document.querySelectorAll(".arrows-btn");

//width de chaque card
const firstCardWidth = document.querySelector(".destination-card").offsetWidth;

//fonctionclicks pour les boutons
arrowsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    swiperContainer.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

let draggingState = false;
let startX;
let startScrollLeft;

//fonction pour commencer le swiper
const startDragging = (e) => {
  draggingState = true;
  swiperContainer.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = swiperContainer.scrollLeft;
};

//fonction pour le swiper
const dragging = (e) => {
  if (!draggingState) return;
  swiperContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
};

//fonction pour arrêter le swiper
const stopDragging = () => {
  draggingState = false;
  swiperContainer.classList.remove("dragging");
};

//event listener
swiperContainer.addEventListener("mousedown", startDragging);
swiperContainer.addEventListener("mousemove", dragging);
swiperContainer.addEventListener("mouseup", stopDragging);
