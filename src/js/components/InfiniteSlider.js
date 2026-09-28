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
        Object.entries(sliderItems).forEach(([name, iconClass]) => {
            const listElement = document.createElement('li');
            const iconElement = document.createElement('i');

            iconElement.className = iconClass;
            listElement.title = name;
            listElement.appendChild(iconElement);
            this.sliderElement.appendChild(listElement);
        });

        // Clona todos os <li> e os renderiza, para dar o efeito de "Slider Infinito"
        this.#cloneElements();
        this.#stopAnimationIfElementNotInScreen();
    }

    /**
     * Clona os itens do slider e adiciona as cópias ao final da lista.
     *
     * As cópias recebem aria-hidden para não serem lidas duas vezes por leitores de tela
     * (e para serem escondidas via CSS quando o usuário prefere menos movimento).
     */
    #cloneElements() {
        const originalElements = [...this.sliderElement.children];
        originalElements.forEach(item => {
            const clonedItem = item.cloneNode(true);
            clonedItem.setAttribute('aria-hidden', 'true');
            this.sliderElement.appendChild(clonedItem);
        });
    }

    /**
     * Verifica se o slider está em tela.
     *
     * Se não estiver, ele pausa a animação, para poupar recursos do navegador do usuário
     */
    #stopAnimationIfElementNotInScreen() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const playState = entry.isIntersecting ? 'running' : 'paused';
                entry.target.style.animationPlayState = playState;
            });
        }, {
            threshold: 0.1
        });

        observer.observe(this.sliderElement);
    }

}
