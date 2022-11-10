const buttonOpenMenu = document.querySelector("#home > nav > button.menu");
const bodyElement = document.querySelector('body');
const modal = document.querySelector("#home > nav > div.content-navbar");
const linkRef = document.querySelectorAll("#home > nav > div.content-navbar > .item-navbar");
let modalIsOpen = false;

const showModal = () => {
  modal.classList.add('onVisibility');
  buttonOpenMenu.classList.add('active');
};

const hiddenModal = () => {
  modal.classList.remove('onVisibility');
  buttonOpenMenu.classList.remove('active');
};

// Para cada link que for clicado no modal
// Irá remover as propriedades de overflow do body, e esconder o modal
linkRef.forEach((element) => {
  element.addEventListener('click', () => {
    hiddenModal();
    bodyElement.style.removeProperty('overflow');
    modalIsOpen = false;
  });
});

// Se o tamanho da janela for maior que 800px e o menu estiver aberto
// ele será removido do DOM
window.addEventListener('resize', () => {
  const checkMinWidth = window.matchMedia("(min-width: 800px)").matches;
  const checkIfTheElementHasAClass = modal.classList.contains('onVisibility');
  
  if (checkMinWidth && checkIfTheElementHasAClass) {
    modal.classList.remove('onVisibility');
  };
});

// Funcionalidade de ao clicar no botão, abrir o modal
buttonOpenMenu.addEventListener('click', () => {
  modalIsOpen ? modalIsOpen = false : modalIsOpen = true;

  modalIsOpen ? showModal() : hiddenModal();
  
  modal.classList.contains('onVisibility') ? 
    bodyElement.style.overflow = 'hidden' :
    bodyElement.style.removeProperty('overflow');
});