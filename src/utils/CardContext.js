import thumb_clone_netflix from "/images/thumb/clone-netflix.webp";
import thumb_crud_pedidos from "/images/thumb/crud-pedidos.webp";
import thumb_regtech from "/images/thumb/regtech.webp";
import thumb_crud_usuarios from "/images/thumb/crud-usuarios.webp";
import thumb_leitor_csv from "/images/thumb/leitor-csv.webp";

import nodejsIcon from "../assets/icons/nodejs-plain-wordmark.svg?raw";
import reactIcon from "../assets/icons/react-original.svg?raw";
import javascriptIcon from "../assets/icons/javascript-plain.svg?raw";
import typescriptIcon from "../assets/icons/typescript-plain.svg?raw";
import firebaseIcon from "../assets/icons/firebase-plain-wordmark.svg?raw";
import mongodbIcon from "../assets/icons/mongodb-plain-wordmark.svg?raw";


/**
 * Ícones das tecnologias (SVG inline, com as cores originais de cada marca)
 */
const tool = (name, svg) => `<i class="icon" title="${name}" role="img" aria-label="${name}">${svg}</i>`;

const tools = {
  'NodeJs': tool('Node.js', nodejsIcon),
  'React': tool('React', reactIcon),
  'JavaScript': tool('JavaScript', javascriptIcon),
  'TypeScript': tool('TypeScript', typescriptIcon),
  'Firebase': tool('Firebase', firebaseIcon),
  'MongoDb': tool('MongoDB', mongodbIcon)
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
    thumb: thumb_leitor_csv,
    title: 'Leitor de CSV',
    description: 'Servidor que lê arquivo em CSV no formato de “Streams” e renderiza no navegador.',
    category: 'Back End',
    siteProject: null,
    linkRepo: 'https://github.com/ruanSignori/read-csv',
    toolsUsed: [tools.NodeJs]
  }
];
