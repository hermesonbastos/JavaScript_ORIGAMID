// Crie uma função para verificar se um valor é Truthy
var nome = 'Hermeson';
function verificar(nome){
  return nome ? 'true' : 'false';
}
console.log(verificar(nome));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
var lado = 5;
function perimetro(lado){
  console.log(lado*4);
}
perimetro(lado);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = "Hermeson", sobrenome = "Bastos";
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto(nome, sobrenome));

// Crie uma função que verifica se um número é par
var numero = 57689454;
function par(numero){
  return numero % 2 == 0 ? "É par" : "É ímpar";
}
console.log(par(numero));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
const variavelQualquer = {nome:"sadas", idade: 10}
function verificarTipo(variavel){
  console.log(typeof variavel);
}
verificarTipo(variavelQualquer);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
  console.log("Hermeson Bastos");
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));