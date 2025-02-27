//Se fossemos concatenar strings da maneira antiga seria desta forma:

// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro nome: " + primeiroNome + ", Último nome: " + ultimoNome + ". Idade " + idade;
// };

// console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));


//A partir do ES6 (EcmaScript 6) podemos usar a interpolação de strings e colocar as variáveis dentro da string:

// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return `Primeiro nome: ${primeiroNome}, Último nome: ${ultimoNome}, idade: ${idade}.`
// };

// console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));

//resumindo mais ainda:

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => `Primeiro nome: ${primeiroNome}, Último nome: ${ultimoNome}, idade: ${idade}.`;

console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));