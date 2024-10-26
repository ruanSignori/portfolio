import thumb_clone_netflix from '../assets/images/thumb/clone-netflix.webp';
import thumb_crud_pedidos from '../assets/images/thumb/crud-pedidos.webp';
import thumb_regtech from '../assets/images/thumb/regtech.webp';
import thumb_crud_usuarios from '../assets/images/thumb/crud-usuarios.webp';
import thumb_escola_padre_fernando from '../assets/images/thumb/escola-padre-fernando.webp';
import thumb_leitor_csv from '../assets/images/thumb/leitor-csv.webp';


const tools = {
  'NodeJs': '<i class="devicon-nodejs-plain-wordmark colored"></i>',
  'NextJs': '<i class="devicon-nextjs-plain colored"></i>',
  'React': '<i class="devicon-react-original colored"></i>',
  'JavaScript': '<i class="devicon-javascript-plain colored"></i>',
  'TypeScript': '<i class="devicon-typescript-plain colored"></i>',
  'Firebase': '<i class="devicon-firebase-plain-wordmark colored"></i>',
  'MongoDb': '<i class="devicon-mongodb-plain-wordmark colored"></i>',
  'TailwindCss': '<i class="devicon-tailwindcss-original colored"></i>'
}

/**
 * @type CreateProjectCard[]
 */
export const cardProjectData = [
  {
    thumb: thumb_clone_netflix,
    title: 'Clone Netflix',
    description: 'Recriação da página principal da Netflix, consumindo a API da IMDB.',
    category: 'Back End',
    siteProject: 'https://clone-netflix-react-ruansignori.vercel.app/',
    linkRepo: 'https://github.com/ruanSignori/clone-netflix-react',
    toolsUsed: [tools.React, tools.JavaScript]
  },
  {
    thumb: thumb_crud_pedidos,
    title: 'CRUD de pedidos',
    description: 'Sistema que gera PDF dos Produtos que o usuário cadastro solicitou, incluindo as funcionalidades de CRUD entre outas...',
    category: 'Front End',
    siteProject: 'https://generate-pdf-ruansignori.netlify.app/',
    linkRepo: 'https://github.com/ruanSignori/CRUD-react',
    toolsUsed: [tools.React, tools.JavaScript]
  },
  {
    thumb: thumb_regtech,
    title: 'RegTech',
    description: 'Aplicativo Mobile integrado com firebase que faz a leitura de dois sensores (Arduino) para medir a temperatura e umidade do solo.',
    category: 'Front End',
    siteProject: 'https://play.google.com/store/apps/details?id=reg.tech',
    linkRepo: 'https://github.com/ruanSignori/regtech',
    toolsUsed: [tools.React, tools.TypeScript, tools.Firebase]
  },
  {
    thumb: thumb_crud_usuarios,
    title: 'CRUD com MongoDb',
    description: 'Construção de API Rest para CRUD utilizando princípios S.O.L.I.D E mongoDb.',
    category: 'Back End',
    siteProject: null,
    linkRepo: 'https://github.com/ruanSignori/crud-nodeJS',
    toolsUsed: [tools.TypeScript, tools.NodeJs, tools.MongoDb]
  },
  {
    thumb: thumb_escola_padre_fernando,
    title: 'Landing Page',
    description: 'Site sobre os projetos realizados na minha antiga escola, utilizando Static Site Generation',
    category: 'Full Stack',
    siteProject: 'https://escola-padre-fernando.vercel.app/',
    linkRepo: 'https://github.com/ruanSignori/escola-padre-fernando',
    toolsUsed: [tools.NextJs, tools.TypeScript, tools.TailwindCss, tools.MongoDb]
  },
  {
    thumb: thumb_leitor_csv,
    title: 'Leitor de CSV',
    description: 'Servidor que lê arquivo em CSV no formato de “Streams” e renderiza no navegador.',
    category: 'Back End',
    siteProject: null,
    linkRepo: 'https://github.com/ruanSignori/read-csv',
    toolsUsed: [tools.NodeJs]
  }
];
