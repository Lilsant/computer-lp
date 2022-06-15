const timer = document.querySelectorAll(".timer__main");
const deadline = new Date("2022-06-21").getTime();
let dateObject;
function setTimer() {
  const time = setInterval(calculateTime, 1000);
  function calculateTime() {
    const date = deadline - Date.now();
    dateObject = {
      days: new Date(date).getDate(),
      hours: new Date(date).getHours(),
      minutes: new Date(date).getMinutes(),
      seconds: new Date(date).getSeconds(),
    };
    changeTime(dateObject);
  }
  function changeTime(date) {
    timer[0].innerHTML = date.days;
    timer[1].innerHTML = date.hours;
    timer[2].innerHTML = date.minutes;
    timer[3].innerHTML = date.seconds;
  }
}

setTimer();

// Mobile Menu

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar--mobile");
const menuOpenButton = document.querySelector(".menu__button");
const menuCloseButton = document.querySelector(".menu__close-btn");

menuOpenButton.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.style.overflow = "hidden";
  navbar.style.display = "block";
  menuOpenButton.style.display = "none";
});

menuCloseButton.addEventListener("click", () => {
  menu.style.display = "none";
  navbar.style.display = "none";
  document.body.style.overflow = "";
  menuOpenButton.style.display = "flex";
});

// End Mobile Menu

// Call Modal Window

const modal = document.querySelector(".modal");
const modalOpenButton = document.querySelectorAll(".modal__btn");
const modalCloseButton = document.querySelector(".modal__close-btn");

modalOpenButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
  });
});

modalCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  document.body.style.overflow = "";
});

// End Call Modal Window

// Email Modal Window

const emailModal = document.querySelector(".success");
const emailModalOpenButton = document.querySelector(".email__btn");
const emailModalCloseButton = document.querySelector(".success__close-btn");

emailModalOpenButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  emailModal.style.display = "flex";
});

emailModalCloseButton.addEventListener("click", (e) => {
  document.body.style.overflow = "";
  emailModal.style.display = "none";
});
