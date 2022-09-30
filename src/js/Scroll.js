const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? 
    entry.target.classList.add('show-element'):
    entry.target.classList.remove('show-element')
  })
})

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((e) => observer.observe(e));