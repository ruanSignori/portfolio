const container = document.querySelectorAll(".card");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");

buttonLeft.addEventListener("click", () => {
  toPrevious();
});

buttonRight.addEventListener("click", () => {
  toNext();
});

let current = 0;

let prev = container.length;
let next = 1;

const toPrevious = () => {
  current > 0 ? toSlide(current - 1) : toSlide(container.length - 1);
};

const toNext = () => {
  current < container.length - 1 ? toSlide(current + 1) : toSlide(0);
};

const toSlide = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < container.length; i++) {
    container[i].classList.remove("active");
    container[i].classList.remove("prev");
    container[i].classList.remove("next");
  }

  if (next === container.length) next = 0;

  if (prev === -1) prev = container.length - 1;

  container[current].classList.add("active");
  container[prev].classList.add("prev");
  container[next].classList.add("next");
};
