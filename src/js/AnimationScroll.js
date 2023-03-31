// Observa se o elemento está dentro da janela, se estiver
// adiciona uma nova classe
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? 
    entry.target.classList.add('show-element'):
    entry.target.classList.remove('show-element')
  });
});

const animatedElements = document.querySelectorAll('.hidden-element');
animatedElements.forEach((e) => observer.observe(e));