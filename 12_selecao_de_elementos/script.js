const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});

// ----------------  Exercício ----------------

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log("Retorne no console todas as imagens do site\n", imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensComecamComImagem = document.querySelectorAll('img[src^=".img/imagem"]');
console.log("Retorne no console apenas as imagens que começaram com a palavra imagem\n", imagensComecamComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInter = document.querySelector('[href^="#"]');
console.log("Selecione todos os links internos (onde o href começa com #)\n", linksInter);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2intoAnimaisDescricao = document.querySelector('.animais-descricao').querySelector('h2');
console.log("Selecione o primeiro h2 dentro de .animais-descricao\n", firstH2intoAnimaisDescricao);

// Selecione o último p do site
const paragraphs = document.querySelectorAll('p');
const lastP = paragraphs[paragraphs.length - 1];
console.log("Selecione o último p do site\n", lastP.innerText);
