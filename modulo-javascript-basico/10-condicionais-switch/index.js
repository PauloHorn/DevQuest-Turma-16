//switch(parâmetro {
//  case valor1:
//      bloco de declaração
//      break
//  case valor2:
//      bloco de declaração
//      break
//  default:   ---  caso não tenha achado nenhuma relação é esse valor que será exibido
//      bloco de declaração
//})

let nomeFilme = "Vingadores";

switch(nomeFilme) {
    case "Vingadores":
        console.log("É o filme dos Vingadores");
        break;
    case "Batman vs Superman":
        console.log("É o filme do Batman vs Superman");
        break;
    case "Senhor dos Anéis":
        console.log("É o filme do Senhor dos Anéis");
        break;
    default:
        console.log("É algum outro filme...");
        break;
}

let nota = 5;

switch(nota) {
    case 1:
    case 2:
        console.log("Filme ruim.");
        break;
    case 3:
    case 4:
        console.log("Filme mediano.");
        break;
    case 5:
        console.log("Filme bom.");
        break;
}