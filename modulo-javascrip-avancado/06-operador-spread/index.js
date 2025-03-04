const pessoas1 = ["Roberto", "Ricardo", "Raphael"];

const pessoas1Copia = [...pessoas1];

console.log(pessoas1);
console.log(...pessoas1);
console.log(pessoas1Copia);


//concatenar dois arrays do jeito antigo

const pessoas2 = ["Pedro", "João", "Paulo"];

const pessoas3 = pessoas1.concat(pessoas2);

console.log(pessoas3);

//concatenar dois arrays com o operador spread

const pessoas4 = [...pessoas1, ...pessoas2];

console.log (pessoas4);


//para objetos funciona também:

const pessoa1 = {nome: "Roberto", idade: 33};
const jogos = {jogo: "God of War", nota: 9};

const objetoClonado = {...pessoa1};

console.log(pessoa1);
console.log(objetoClonado);

const pessoas = {...pessoa1, ...jogos};

console.log(pessoas);
