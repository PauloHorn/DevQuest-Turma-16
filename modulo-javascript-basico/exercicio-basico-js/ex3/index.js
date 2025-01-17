let dormir = confirm("Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?");

if (dormir) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!");
} else if (dormir == false) {
    alert("Que pena! Você parecia ser uma pessoa mais legal...");
};

//com OPERADOR TERNÁRIO ficaria assim:
// dormir ? alert("Ótimo! Nós temos as melhores camas de toda a região!") : alert("Que pena! Você parecia ser uma pessoa mais legal...");
