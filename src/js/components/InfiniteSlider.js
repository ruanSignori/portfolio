import { sliderItems } from "../../utils/ItemsInfiniteSlider";

/**
 * Classe responsável por criar o "Slider Infinito"
 * 
 * Basta apenas ter uma instância dela, que ela se encarrega de fazer o resto (por enquanto)
 * 
 */
export class InfiniteSlider {
    constructor (
        /**
         * Elemento principal, aonde dentro dele os itens serão renderizados
         * @type Element
         */
        sliderElement = document.querySelector('.infinite-scroll ul'),
    ) {
        this.sliderElement = sliderElement;
        this.#renderElements();
    }

    /**
     * Monta o html que renderiza os elementos do "Slider Infinito"
     */
    #renderElements() {
        const sliderItemsClass = sliderItems;

        Object.values(sliderItemsClass).forEach(currentItem => {
            const listElement = document.createElement('li');
            const iconElement = document.createElement('i');   

            iconElement.className = currentItem;
            listElement.appendChild(iconElement);
            this.sliderElement.appendChild(listElement);
        });

        this.#disableInfiniteScrollForReducedMotion();

        // Clona todos os <li> e os renderiza, para dar o efeito de "Slider Infinito"
        this.#cloneElements('.infinite-scroll ul li');
        this.#stopAnimationIfElementNotInScreen('.infinite-scroll ul');
    }

    /**
     * Verifica se o usuário está com configuração de (prefers-reduced-motion: reduce).
     * 
     * Se sim, não aplica o Scroll Infinito por questões de desempenho.
     * @reference https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
     */
    #disableInfiniteScrollForReducedMotion() {
        if (window.matchMedia(("(prefers-reduced-motion: reduce)")).matches) {
            //this.sliderElement.classList.add('skills-grid');
        }
    }

    /**
     * Clona um elemento e retorna essa cópia
     * @param {string} pathElement - O seletor do elemento que será clonado
     * @returns {Element} - A cópia do elemento original
     */
    #cloneElements(pathElement) {
        const originalElements = document.querySelectorAll(pathElement);
        originalElements.forEach(item => {
            const clonedItem = item.cloneNode(true); // Clona o item <li> individualmente
            this.sliderElement.appendChild(clonedItem); // Adiciona o clone ao final da lista
        });
    }

    /**
     * Verifica se o elemento passado por parâmetro está em tela.
     * 
     * Se não estiver, ele pausa a animação, para poupar recursos do navegador do usuário
     * @param {string} pathElement 
     */
    #stopAnimationIfElementNotInScreen(pathElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const playState = entry.isIntersecting ? 'running' : 'paused';
                entry.target.style.animationPlayState = playState;
            });
        }, {
            threshold: 0.1
        });

        const sliderContainer = document.querySelector(pathElement);
        observer.observe(sliderContainer);
    }

}
