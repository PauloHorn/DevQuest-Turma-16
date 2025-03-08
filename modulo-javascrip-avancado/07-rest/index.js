// de modeo genérico representamos o rest como abaixo:

// function (a, b, ...outros) {
//     código
// };

function incentivarQuester (mensagem, ...nomesQuesters) {
    console.log(`${mensagem} ${nomesQuesters}`);
};

incentivarQuester("Parabéns por ter chego no módulo avançado de JS,","Paulo", " João", " Mateus!");

//Poderíamos usar a função .map também:

function incentivarQuester2 (mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`));
};

incentivarQuester2("Parabéns por ter chego no módulo avançado de JS,","Paulo", "João", "Mateus");
