function colocarAguaParaFerver(){
    console.log("Colocar água para ferver");
    setTimeout(() => {
        console.log("Água ferveu");
        passarOCafe();
    }, 5000);
};

function prepararParaPassarOCafe(){
    console.log("Pegar o pó de café");
    console.log("Pegar o filtro de café");
    console.log("Colocar o filtro no suporte para filtrar");
    console.log("Colocar o pó de café no filtro");
    console.log("Colocar o suporte para filtrar sobre a xícara");
};

function passarOCafe(){
    console.log("Despejar a água quente no filtro com o pó");
};


colocarAguaParaFerver();

prepararParaPassarOCafe();
