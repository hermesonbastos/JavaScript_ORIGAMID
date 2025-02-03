// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const internLinks = document.querySelectorAll('a');

function toggleLinks(event) {
  event.preventDefault();

  const clickedLink = event.target;

  clickedLink.classList.add('ativo');

  internLinks.forEach((item) => {
    if(item != clickedLink) item.classList.remove('ativo');
  })
}

internLinks.forEach((item) => {
  item.addEventListener('click', toggleLinks);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('*');
allElements.forEach((item) => {
  item.addEventListener('click', (e) => console.log(e.target));
})



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
allElements.forEach((item) => {
  item.addEventListener('click', (e) => e.target.remove());
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keypress', (e) => {
  console.log(e);
  if(e.key === "t") {
    document.documentElement.classList.toggle('textomaior');
  }
});