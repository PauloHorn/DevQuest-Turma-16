//Assim como a alert(), o setTimeout e o setInterval são objetos do window, não precisamos declarar a função para poder usá-la

// setTimeout(function(){
//     alert("Olá, mundo!")
// }, 3000)

//simplificando:

let olaMundo = setTimeout (() => alert("Olá mundo!"), 5000);

// setInterval(() => {
//     alert("executando a cada 2 segundos!")
// }, 2000);

let idDoIntervalo = setInterval(() => {
    console.log("executando a cada 2 segundos!")
}, 2000);

clearInterval(idDoIntervalo);
clearTimeout(olaMundo);
