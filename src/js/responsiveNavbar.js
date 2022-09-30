const buttonOpenMenu = document.querySelector("#home > nav > button.menu");
const bodyElement = document.querySelector('body');
const modal = document.querySelector("#home > nav > div.content-navbar");
let modalIsOpen = false;


window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 800px)").matches && 
      modal.classList.contains('onVisibility')) {
        modal.classList.remove('onVisibility');
  };
});

buttonOpenMenu.addEventListener('click', () => {
  modalIsOpen ? modalIsOpen = false : modalIsOpen = true;

  if (modalIsOpen) {
    modal.classList.add('onVisibility');
    buttonOpenMenu.classList.add('active');
  } else {
    modal.classList.remove('onVisibility');
    buttonOpenMenu.classList.remove('active');
  };

  modal.classList.contains('onVisibility') ? 
  bodyElement.style.overflow = 'hidden' :
  bodyElement.style.removeProperty('overflow');
});