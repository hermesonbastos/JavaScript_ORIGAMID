// Adicione a classe ativo a todos os itens do menu
const allMenuItems = document.querySelectorAll('.menu a');

allMenuItems.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
allMenuItems.forEach((item, index) => {
  if(index > 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
document.querySelectorAll('img').forEach((item, index) => {
  console.log(
    `A ${index + 1}° imagem ${item.hasAttribute('alt') ? "possui" : "não possui"} o atributo alt`
  );
});

// Modifique o href do link externo no menu
const menuLinks = document.querySelectorAll('.menu a');

menuLinks[menuLinks.length - 1].setAttribute('href', "https://www.youtube.com/watch?v=xvFZjo5PgG0");
menuLinks[menuLinks.length - 1].setAttribute('target', "_blank");

