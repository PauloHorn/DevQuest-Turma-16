let jogo1 = {
    nome: "Final Fantasy"
};

let jogo2 = {
    nome: "Fallout"
};

let videoGame = {
    nome: "Xbox",
    valor: 3000,
    jogos: [jogo1, jogo2]
};

console.log(videoGame);

let jogo3 = {
    nome: "Fifa"
}

videoGame.jogos.push(jogo3);

console.log(videoGame);


let cliente = {
    nome: "Paulo",
    ultimoPedido: {
        produto: "Xbox",
        valor: 3000,
        jogos: [
            {nome: "Fifa"},
            {nome: "Final Fantasy"}
        ]
    }
};

console.log(cliente);

console.log(cliente.ultimoPedido.jogos);

console.table(cliente);
