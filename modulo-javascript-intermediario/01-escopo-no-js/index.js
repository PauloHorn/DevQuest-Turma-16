//Escopo global
let mensagem5 = "Em algum lugar do escopo...";
console.log(mensagem5);


//Escopo de bloco
if (true) {
    const mensagem = "Olá!";

    console.log(mensagem);
    console.log(mensagem5);
};

// console.log(mensagem);
//mensagem só está definida dentro do if, logo ela só será exibida dentro do escopo (dentro do if), fora dele dará o erro: index.js:7  Uncaught ReferenceError: mensagem is not defined at nome do arquivo js. Se criarmos a variável com var, isso não acontecerá, mas pode gerar problemas em códigos grandes para acharmos possíveis erros numa depuração.
//---------------------------------------------

//Escopo de código autônomo
{
    const mensagem2 = "Tudo bem?"
    console.log(mensagem2);
    console.log(mensagem5);
};

// console.log(mensagem2);
//mensagem2 só está definida dentro do código autônomo, logo ela só será exibida dentro do escopo (dentro do bloco autônomo), fora dele dará o erro: index.js:7  Uncaught ReferenceError: mensagem2 is not defined at nome do arquivo js. Se criarmos a variável com var, isso não acontecerá, mas pode gerar problemas em códigos grandes para acharmos possíveis erros numa depuração.
//---------------------------------------------

//Escopo de função
function falar(){
    var mensagem3 = "Como se chama?";

    console.log(mensagem3);
    console.log(mensagem5);

    function responder(){
        let mensagem4 = "Não tenho nome...";

        console.log(mensagem4);
        console.log(mensagem5);
    }
    responder();
};

falar();
// console.log(mensagem3);
// responder();
//mensagem3 e responder só estão definidas dentro do escopo da função falar, logo ela só será exibida dentro do escopo (dentro do bloco da função), fora dele dará o erro: index.js:7  Uncaught ReferenceError: responder is not defined at nome do arquivo js.
//---------------------------------------------
