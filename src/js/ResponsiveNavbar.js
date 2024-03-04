export class HandleResponsiveNavbar {
  #btnMenu = document.querySelector("nav button.menu");
  #bodyElement = document.querySelector("body");
  #modal = document.querySelector("nav div.content-navbar");
  #linkRef = document.querySelectorAll(".link");
  #modalIsOpen = this.#modal.classList.contains("active");

  observer() {
    this.#removeModalIfResizedWindow();
    this.#observerIfButtonHasClicked();
    this.#closeModalIfLinkOnClick();
  }

  /**Verifica se o modal já está aberto ou fechado, então renderiza ou remove o elemento */
  #handleModalOpeningAndClose() {
    this.#modal.classList.toggle("active");
    this.#btnMenu.children[0].classList.toggle("active");
    this.#modalIsOpen = !this.#modalIsOpen;
    this.#bodyElement.classList.toggle("no-overflow");
  }

  /**Verifica se o Botão de abrir o menu na Navbar é clicado, para disparar o evento de #handleModalOpeningAndClose()  */
  #observerIfButtonHasClicked() {
    this.#btnMenu.addEventListener("click", () => {
      this.#handleModalOpeningAndClose();
    });
  }

  /** Se o tamanho da janela for maior que 1.200px e o menu estiver aberto ele será removido do DOM */
  #removeModalIfResizedWindow() {
    window.addEventListener("resize", () => {
      const checkMinWidth = window.matchMedia("(min-width: 1200px)").matches;

      if (checkMinWidth && this.#modalIsOpen) {
        this.#handleModalOpeningAndClose();
      }
    });
  }

  /**Se clicado em algum link que tenha a classe "item-navbar", será direcionado e o modal vai ser fechado */
  #closeModalIfLinkOnClick() {
    this.#linkRef.forEach((element) => {
      element.addEventListener("click", () => {
        if (this.#modalIsOpen) {
          this.#handleModalOpeningAndClose();
        }
      });
    });
  }
}
