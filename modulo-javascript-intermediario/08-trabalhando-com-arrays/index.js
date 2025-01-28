let frutas = ["banana", "maçã", "laranja", "pêra"];

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log("---------------------");

frutas.push("limão");

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log("---------------------");

let ultimaFruta = frutas.pop();

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log(ultimaFruta);
console.log("---------------------");

let primeiraFruta = frutas.shift();

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log(primeiraFruta);
console.log("---------------------");

frutas.unshift("banana", "limão");

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log("---------------------");

console.log(frutas.indexOf("banana"));
console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("carambola"));
console.log("---------------------");

let parteDoArray = frutas.slice(1,4); // Copia os elementos do índice 1 até o índice 3 (não inclui o 4)

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log(parteDoArray);
console.log("---------------------");

frutas.splice(0, 0, "pitanga", "mirtilo");

for(let i = 0; i < frutas.length; i++) {
    console.log (frutas[i]);
};

console.log(frutas.length);
console.log("---------------------");

let frutas2 = ["carambola"];

let frutas3 = frutas.concat(frutas2);

console.log(frutas.length);
console.log(frutas2.length);
console.log(frutas3.length);
console.log(frutas3);
console.log("---------------------");

let palavras = ["Olá", "mundo!"];
let frase = palavras.join(" ");
console.log(frase);
console.log("---------------------");

const numeros = [1, 2, 3];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // Imprime [2, 4, 6]
console.log("---------------------");

const numeros2 = [1, 2, 3, 4, 5];
const numerosPares = numeros2.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Imprime [2, 4]
console.log("---------------------");

const numeros3 = [1, 2, 3, 4];
const soma = numeros3.reduce((acumulador, numero) => acumulador + numero, 0); // 0 é o valor inicial do acumulador
console.log(soma); // Imprime 10
console.log("---------------------");

const cores = ["vermelho", "verde", "azul"];
cores.forEach(cor => console.log(cor)); // Imprime cada cor no console
console.log("---------------------");
