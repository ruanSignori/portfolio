import { cardContent } from "../utils/CardContext";

const containerCarousel = document.querySelector("#skills > div.content-carousel > div > div.parent-slider");

// Cria de forma dinâmica os cards 
const createCardSlider = (reference, src_img, title, content_text) => {
  const label = document.createElement('label');
  const img = document.createElement('img');
  const p_title = document.createElement('p');
  const p_content = document.createElement('p');

  label.setAttribute('id', reference); 
  label.classList.add('card', 'hidden-card');

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

// Renderiza os cards na tela
cardContent.forEach(({title, text, src_Img, reference_Id }) => {
  const element = createCardSlider(
    reference_Id,
    src_Img,
    title,
    text
  );

  containerCarousel.appendChild(element);
});

// // Se o tamanho da janela for maior que 800px o slider não irá funcionar
// const checkMinWidth = window.matchMedia("(min-width: 800px)").matches;
// if (checkMinWidth) containerCarousel.classList.remove('slider-visible');

// window.addEventListener('resize', () => {
//   const checkMinWidth = window.matchMedia("(min-width: 800px)").matches;
  
//   checkMinWidth ? 
//     containerCarousel.classList.remove('slider-visible'):
//     containerCarousel.classList.add('slider-visible');
// });