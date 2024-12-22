let nomeFilme = "Vingadores";

if (nomeFilme === "Vingadores") {
    console.log("É o filme dos vingadores!")
} else if (nomeFilme === "Batman vs Superman"){
    console.log("É o filme do Batman vs Superman!")
} else {
    console.log ("É outro filme...")
};

// No caso de termos só duas opções, podemos escrever um código de uma forma menos verbosa, chamada de OPERADOR TERNÁRIO, como demostrado abaixo:

// (condição verdadeira ou falsa) ? console.log("condição verdadeira") : console.log("condição falsa")

nomeFilme === "Vingadores" ? console.log("É o filme dos Vingadores!") : console.log("Não é o filme dos Vingadores...");
