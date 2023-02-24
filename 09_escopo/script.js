// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor, marca, portas);
//Resposta: Pois apenas uma variável está definida com "var" que permite que ela vaze
//do bloco de código, já as outras duas estão declaradas com "let" e "const" que nã permitem o vazamento.


// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);
//Resposta: declarando a variávvel "dois" fora do bloco de código da primeira função


// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
//Resposta: declarar a variável "numero" com "let" dentro do for, pois o var permite o for alterar o valor da primeira declaração