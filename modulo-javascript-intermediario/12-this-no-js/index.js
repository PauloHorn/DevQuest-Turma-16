"use strict";

console.log(this); //escopo global
console.log(window);
console.log(window === this);

this.name = "Paulo";
function saudar() {
    console.log("this no contexto da função", this);
    console.log(`Olá, ${name}!`);
};
saudar();


let usuario = {
    nome: "Paulo2",
    saudar2: function() {
        console.log("this no contexto do método: ", this);

        console.log("this.name no contexto do método: ", this.nome);
    }
};

usuario.saudar2();

let comida = {
    nome: "brócolis",
    temperatura: 0
};

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log("this no contexto do objeto comida", this);
    this.temperatura = temperaturaDeCozimento;
};

console.log(comida);

comida.cozinhar(100);

console.log(comida);
