import { cardContent } from "../utils/CardContext";

const containerCarousel = document.querySelector("#skills > div.content-carousel > div > div.parent-slider");

const createCardSlider = (reference, src_img, title, content_text) => {
  const label = document.createElement('label');
  const img = document.createElement('img');
  const p_title = document.createElement('p');
  const p_content = document.createElement('p');

  label.setAttribute('id', reference); 
  label.classList.add('card', 'hidden-element');

  p_title.textContent = title;
  p_title.classList.add('title-card');
  p_content.textContent = content_text;
  p_content.classList.add('content-card');

  img.setAttribute('src', src_img);
  img.setAttribute('width', '98');
  img.setAttribute('height', '98');
  img.setAttribute('loading', 'lazy');

  label.appendChild(img);
  label.appendChild(p_title);
  label.appendChild(p_content);

  return label;
};

cardContent.forEach(({title, text, src_Img, reference_Id }) => {
  const element = createCardSlider(
    reference_Id,
    src_Img,
    title,
    text
  );

  containerCarousel.appendChild(element);
});