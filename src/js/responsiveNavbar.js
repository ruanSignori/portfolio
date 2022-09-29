const buttonOpenMenu = document.querySelector("#home > nav > button.menu");
const bodyElement = document.querySelector('body');
const modal = document.querySelector("#home > nav > div.content-navbar");
let modalIsOpen = false;

buttonOpenMenu.addEventListener('click', () => {
  modalIsOpen ? modalIsOpen = false : modalIsOpen = true;

  if (modalIsOpen) {
    modal.classList.add('onVisibility');
    buttonOpenMenu.classList.add('active');
  } else {
    modal.classList.remove('onVisibility');
    buttonOpenMenu.classList.remove('active');
  };

  if (modal.classList.contains('onVisibility')) {
  
    bodyElement.style.overflow = 'hidden'
    console.log(bodyElement)
  } else {
    bodyElement.style.removeProperty('overflow');
    console.log(bodyElement)
  };
});