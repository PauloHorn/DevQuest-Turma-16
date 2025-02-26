let ordens = [
    {cliente: "Roberto", tipo: "compra", quantidade: 56, ativo: "NFLX34"},
    {cliente: "Ricardo", tipo: "compra", quantidade: 76, ativo: "AAPL34"},
    {cliente: "Rafael", tipo: "venda", quantidade: 21, ativo: "GOGL34"}
];

//se quisermos somar a quantidade de ordens comercializadas

//da maneira antiga seria assim, com o for, por exemplo:

// let quantidadeDeOrdens = 0;

// for(let i = 0; i < ordens.length; i++) {
//     quantidadeDeOrdens += ordens[i].quantidade
// };

// console.log(quantidadeDeOrdens);


//usando reduce, poderíamos escrever:

// let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
//     return somaDasOrdens + ordem.quantidade;
// }, 0);//zero é o valor inicial de somaDasOrdens

// console.log(quantidadeDeOrdens);

//de maneira mais resumida, poderíamos escrever:

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade, 0);

console.log(quantidadeDeOrdens);
