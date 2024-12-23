// Funções possuem este formto padrão:
// function nomeDaFuncao (parâmetro1, parâmetro2,...) {
//     bloco de código
// }

// nomeDaFuncao(parâmetro1, parâmetro2,...)

//O código abaixo abre uma janela com uma frase dentro
function incentivarQuester() {
    alert("Muito bem, você chegou ao JS! Continue assim.");
}

incentivarQuester();


//O código abaixo vai imprimir no console a soma de 2 números
function soma(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log("A soma " + numero1 + " mais o " + numero2 + " resulta em " + resultado)
};

soma(1,3);
