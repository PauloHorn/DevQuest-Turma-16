//Funções que recebem outras funções:
const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 1;
    let anoDeNascimento = 2025 - idade;
    if(mesDeNascimento > mesAtual) anoDeNascimento --;
    imprimir(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log ("Seu ano de nascimento é: " + anoDeNascimento + ".")
}

calcularAnoDeNascimento(37, 2, imprimirAnoDeNascimento);


//Funções que retornam outras funções:
function multiplicar(multiplicador) {
    return function(numero){
        return numero * multiplicador;
    };
};

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));
