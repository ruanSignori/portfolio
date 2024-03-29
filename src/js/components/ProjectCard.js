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
    const html = `
        <div class="flex card-project">
            <img src="${
              this.thumb
            }" width="400" class="thumb-project" alt="Thumbnail do projeto ${
      this.title
    }" loading="lazy" />
            <div class="content-card flex">
                <div class="content-card-row-1 flex">
                    <p class="category-project" title="Categoria do projeto">${
                      this.category
                    }</p>
                    <div class="procjets-url">
                        <a href="${
                          this.linkRepo
                        }" title="Código fonte do projeto" target="_blank">
                            <i class="ph-bold ph-code-simple"></i>
                        </a>
                        ${(this.siteProject !== null) ?
                        `
                          <a href="${this.siteProject}" title="Site do projeto">
                          <i class="ph-bold ph-link"></i>
                          </a>
                          ` : ''
                        }
                    </div>
                </div>
            <div class="content-card-row-2 flex">
                <p class="card-title">${this.title}</p>
                <p class="card-description">
                    ${this.description}
                </p>
            </div>
                <div class="content-card-row-3 flex" title="Tecnologias utilizadas">
                    ${this.toolsUsed.map((element) => {
                      return element;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    document.querySelector(".container-cards").insertAdjacentHTML('beforeend', html)
  }
}
