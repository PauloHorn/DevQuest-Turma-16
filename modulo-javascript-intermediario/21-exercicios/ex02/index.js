let numeros = [65, 44, 12, 4];

numeros.forEach(numero => console.log(numero * 10));


let numeros2 = [65, 44, 12, 4];

numeros2MultiplicadosPor10 = numeros2.map(numero => numero * 10);

console.log(numeros2MultiplicadosPor10);

let paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);

let paragrafo1 = paragrafos[0];

console.log(paragrafo1);

function trocarCor() {
    paragrafo1.style.backgroundColor = "red";
}

