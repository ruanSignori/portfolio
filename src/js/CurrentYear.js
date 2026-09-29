// Preenche o ano atual no rodapé, para não precisar atualizá-lo manualmente todo ano.
document.querySelectorAll(".current-year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
