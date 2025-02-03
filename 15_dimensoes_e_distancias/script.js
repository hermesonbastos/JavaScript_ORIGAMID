// Verifique a distância da primeira imagem
// em relação ao topo da página
const images = document.querySelectorAll('img');
console.log(images[0].offsetTop);

// Retorne a soma da largura de todas as imagens
let widthSum = 0;
function somaImagens() {
  images.forEach((item) => {
    widthSum += item.getBoundingClientRect().width;
  });
  console.log(widthSum);
}
window.onload = () => {
  somaImagens();
};


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item, index) => {
  const hasMinimumLinkSize = item.offsetWidth >= 48 && item.offsetHeight >= 48;
  console.log(`O ${index + 1}° ${hasMinimumLinkSize ? "tem" : "não tem"} o tamanho mínimo clicável.`)
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const isMobile = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');
if(isMobile.matches) menu.classList.add('menu-mobile');
console.log(menu.classList)
