//Promises possuem 4 estados:
/*
    1 - pendente: quando a promise foi criada mas não foi executada ainda
    2 - realizada: quando a promise tem sucesso na execução (resolve)
    3 - recusada: quando teve alguma falha na execução da promise (reject)
    4 - estabelecida: promise realizada (resolve) ou recusada (reject)
*/

// new Promise((resolve, reject) => {

// });


let ferverAgua = (chaleiraEstaNoFogao, fogoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogoEstaLigado) {
            console.log("Começando o processo de ferver a água.")
            resolve();
        } else {
            console.log("É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água.")
            reject();
        }
    });
};

let chaleiraEstaNoFogao = true;
let fogoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogoEstaLigado);
