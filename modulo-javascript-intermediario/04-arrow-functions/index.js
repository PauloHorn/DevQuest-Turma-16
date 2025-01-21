let resultadoDaSoma = (numero1, numero2) => {
    return numero1 + numero2;
}
console.log(resultadoDaSoma(12, 5));


//se tiver só um parâmetro, não precisamos dos parênteses
const incentivarQuester = nomeQuester => {
    console.log ("Parabéns " + nomeQuester + ", você chegou ao módulo de JS intermediário!!!")
};

incentivarQuester("Paulo");


//se tiver apenas uma linha de código na função, poderíamos tirar as chaves e o return
let resultadoDaSoma2 = (numero1, numero2) => numero1 + numero2;

console.log(resultadoDaSoma2(12, 6));
