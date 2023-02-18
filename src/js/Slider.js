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
let prev = 4;
let next = 1;

const toPrevious = () => {
  current > 0 ? toSlide(current - 1) : toSlide(container.length - 1);
};

const toNext = () => {
  current < 4 ? toSlide(current + 1) : toSlide(0);
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

  if (next == 5) next = 0;

  if (prev == -1) prev = 4;

  container[current].classList.add("active");
  container[prev].classList.add("prev");
  container[next].classList.add("next");
};
