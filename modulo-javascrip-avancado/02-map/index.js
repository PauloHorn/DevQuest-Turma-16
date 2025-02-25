let pessoas = [
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade:33},
    {nome: "Raphael", idade: 27}
];

//da maneira antiga:

// let nomeDasPessoas = [];

// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome);
// };

//usando MAP:

// let nomeDasPessoas = pessoas.map(function(pessoa) {
//     return pessoa.nome;
// });

//resumido mais:

// let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome);

// console.log(nomeDasPessoas);


//podemos até concatenar textos ou outras informações, como mostrado abaixo:

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade.");

console.log(nomeDasPessoas);