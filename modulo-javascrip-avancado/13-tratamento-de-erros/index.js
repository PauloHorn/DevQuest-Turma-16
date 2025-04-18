
let ferverAgua = (chaleiraEstaNoFogao, fogoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if (typeof chaleiraEstaNoFogao != "boolean") throw "Somente o tipo booleano é aceito"
        
        if(chaleiraEstaNoFogao && fogoEstaLigado) {
            console.log("Passo 1 finalizado: Água foi fervida.")
            resolve(true);
        } else {
            const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água."
            reject(mensagemDeErro);
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

async function iniciarProcessoDeFazerCafe () {
    try{
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
    if(xicaraLavada) console.log("Finalizado o ritual do café, bora trabalhar!");
        }catch(err){
        console.log(err);
    }finally{
        console.log("Aprendemos o try, catch, finally e o trhow!")
    }
};

iniciarProcessoDeFazerCafe();
