
let ferverAgua = (chaleiraEstaNoFogao, fogoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogoEstaLigado) {
            console.log("Passo 1 finalizado: Água foi fervida.")
            resolve(true);
        } else {
            console.log("É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água.")
            reject();
        }
    });
};

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado: café foi passado.");
        resolve(true);
    });
};

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café.");
        resolve(true);
    });
};

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log("Passo 4 finalizado: Terminaie de lavar a xícara.");
        resolve(true);
    });
};

let chaleiraEstaNoFogao = true;
let fogoEstaLigado = true;

// ferverAgua(chaleiraEstaNoFogao, fogoEstaLigado)
//     .then(() => {
//         return passarOCafe();
//     })
//     .then(() => {
//         return tomarCafe();
//     })
//     .then(() => {
//         return lavarXicara();
//     })
//     .then(() => {
//         console.log("Finalizado o ritual do café, bora trabalhar!");
//     });

async function iniciarProcessoDeFazerCafe () {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
    if(xicaraLavada) console.log("Finalizado o ritual do café, bora trabalhar!");
};

iniciarProcessoDeFazerCafe();
