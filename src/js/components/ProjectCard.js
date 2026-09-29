import githubIcon from "../../assets/icons/github-logo.svg?raw";
import arrowUpRightIcon from "../../assets/icons/arrow-up-right.svg?raw";

export class CreateProjectCard {
  constructor(
    /**
     * Imagem de Fundo
     * @type string
     */
    thumb,
    /**
     * Título do Projeto
     * @type string
     */
    title,
    /**
     * Descrição do Projeto
     * @type string
     */
    description,
    /**
     * Categoria do projeto
     * @type 'Front End' | 'Back End' | 'DevOps' | 'Design'
     */
    category,
    /**
     * Link para o site do projeto (Produção)
     * @type string | null
     */
    siteProject = null,
    /**
     * Link para o repositório
     * @type string
     */
    linkRepo,
    /**
     * Lista de Tecnologias que foram utilizadas
     * @type string[]
     */
    toolsUsed
  ) {
    this.thumb = thumb;
    this.title = title;
    this.description = description;
    this.category = category;
    this.siteProject = siteProject;
    this.linkRepo = linkRepo;
    this.toolsUsed = toolsUsed;

    this.#render();
  }

  #render() {
    const siteLink = this.siteProject !== null
      ? `
        <a href="${this.siteProject}" title="Site do projeto" aria-label="Site do projeto ${this.title}" target="_blank" rel="noopener">
          <i class="icon" aria-hidden="true">${arrowUpRightIcon}</i>
        </a>
      `
      : '';

    const html = `
      <article class="card-project">
        <div class="card-thumb">
          <img src="${this.thumb}" width="494" height="226" alt="Thumbnail do projeto ${this.title}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="category-project" title="Categoria do projeto">${this.category}</span>
            <div class="project-links">
              <a href="${this.linkRepo}" title="Código fonte do projeto" aria-label="Código fonte do projeto ${this.title}" target="_blank" rel="noopener">
                <i class="icon" aria-hidden="true">${githubIcon}</i>
              </a>
              ${siteLink}
            </div>
          </div>
          <h3 class="card-title">${this.title}</h3>
          <p class="card-description">${this.description}</p>
          <div class="card-tools" title="Tecnologias utilizadas">
            ${this.toolsUsed.join('')}
          </div>
        </div>
      </article>
    `;

    document.querySelector(".container-cards").insertAdjacentHTML('beforeend', html);
  }
}
