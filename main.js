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

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar--mobile");
const menuOpenButton = document.querySelector(".menu__button");
const menuCloseButton = document.querySelector(".menu__close-btn");

menuOpenButton.addEventListener("click", () => {
  menu.style.display = "block";
  navbar.style.display = "block";
  menuOpenButton.style.display = "none";
});

menuCloseButton.addEventListener("click", () => {
  menu.style.display = "none";
  navbar.style.display = "none";
  menuOpenButton.style.display = "flex";
});
