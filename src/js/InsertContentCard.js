import { cardContent } from "../utils/CardContext";

const srcImgCard = document.querySelectorAll("img.img-card");
const titleCard = document.querySelectorAll(".title-card");
const contentTextCard = document.querySelectorAll(".content-card");

cardContent.forEach(({ title, srcImg, text, altImg }, index) => {
  srcImgCard[index].setAttribute("src", srcImg);
  srcImgCard[index].setAttribute("alt", altImg);
  titleCard[index].textContent = title;
  contentTextCard[index].textContent = text;
});
