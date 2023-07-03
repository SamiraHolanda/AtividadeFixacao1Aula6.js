//Questão1:
var numeros = [25, 23, 6, 4, 11, 55, 30, 21, 34, 89, 56];
numeros.sort();
var ordem = numeros.sort((a,b) => {
    return a - b;
});
console.log(ordem);
//Questão2:
var times = ['Santos', 'Sport', 'Santa_Cruz', 'Vasco', 'Chapecó'];
times.push('Flamengo');
times.shift();
times.unshift(0);
times.push('Grêmio');
times.unshift('São Paulo');
console.log(times.length);
times.pop();
times.sort();
console.log(times);
//Questão3:
var atividadesDiarias = ['Tomar banho', 'Escovar os dentes', 'Comer', 'Cozinhar', 'Limpar a casa', 'Lavar a louça', 'Estudar'];
atividadesDiarias.reverse();
console.log(atividadesDiarias);
var posicao3 = atividadesDiarias[3];
var posicao6 = atividadesDiarias[6];
console.log(posicao3, posicao6);
var lista = String("Tomar banho - Escovar os dentes - Comer - Cozinhar - Limpar a casa - Lavar a louça - Estudar");
console.log(lista);
var atividadesGosto = ['Ver filmes', 'Cuidar da pele'];
console.log(atividadesDiarias, atividadesGosto);
//Questão4:
var cidades = ['Recife', 'Gravatá', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru'];
cidades.sort();
console.log(cidades);
cidades.shift();
cidades.pop();
console.log(cidades);
cidades.sort();
console.log(cidades);