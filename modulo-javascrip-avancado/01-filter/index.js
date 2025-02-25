let pessoas = [
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade:33},
    {nome: "Raphael", idade: 27}
];

//Se quisermos fazer um filtro por idade por exemplo:
//da maneira antiga poderíamos usar um for:
// let pessoasComIdadeDe33Anos = [];
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 33) {
//         pessoasComIdadeDe33Anos.push(pessoas[i]);
//     }
// };

// console.log(pessoasComIdadeDe33Anos);

//com a função filter:

// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
//     return pessoa.idade === 33;
// });

//de maneira resumida:

let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33);

console.log(pessoasComIdadeDe33Anos);
