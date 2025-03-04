//Em arrays:

const numeros = [1, 2, 3, 4, 5];

//Na maneira antiga para extraírmos cada um dos valores, faríamos:

// const primeiro = numeros[0];
// const segundo = numeros[1];


// Com a desestruturação com nomes de variáveis correspondentes à posição do elemento

const [primeiro, segundo, terceiro, quarto = 0] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2
console.log(terceiro); // 3
console.log(quarto); // 4

// Em objetos:

let pessoa = {
    nome: "Paulo",
    sobrenome: "Horn",
    idade: 38
};

// let {nome: nome, idade: idade, sobrenome: sobrenome} = pessoa;

// console.log(nome);
// console.log(idade);
// console.log(sobrenome);


//podemos resumir mais, pois quando estamos criando as variáveis, como elas tem o mesmo nome dos componentes do objeto, podemos simplificar:

let {nome, idade, sobrenome} = pessoa;

console.log(nome);
console.log(idade);
console.log(sobrenome);
