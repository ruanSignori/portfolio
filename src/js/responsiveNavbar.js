// addEventListener('resize', () => {
//   const container = document.querySelector('#app>nav>div.content-navbar');
//   const switchTheme = document.querySelector("#app>nav>div>label.change-color");

//   if (window.matchMedia("(max-width: 750px)").matches) {
//     container.classList.replace('flex', 'menu-responsive');
    
//   } else {
//     container.classList.replace('menu-responsive', 'flex');
//   }
// });

const buttonOpenMenu = document.querySelector("#app > nav > button.menu");
const bodyElement = document.querySelector('body');
const modal = document.querySelector("#app > nav > div.content-navbar");
let modalIsOpen = false;

buttonOpenMenu.addEventListener('click', () => {
  modalIsOpen ? modalIsOpen = false : modalIsOpen = true;

  modalIsOpen ? 
  modal.classList.add('onVisibility') : 
  modal.classList.remove('onVisibility');

  if (modal.classList.contains('onVisibility')) {
    bodyElement.style.overflowX = 'hidden'
  }
  

})