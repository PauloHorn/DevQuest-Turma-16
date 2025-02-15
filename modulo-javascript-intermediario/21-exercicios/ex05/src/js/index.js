const imagens = document.querySelectorAll(".slide");

const setaVoltar = document.getElementById("seta-voltar");

const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
    if (imagemAtual < imagens.length -1) {
        esconderImagemAtual();
        imagemAtual++;
        setaVoltar.classList.remove("opacidade");
        mostrarProximaImagem();
    } else {
        setaAvancar.classList.add("opacidade");
        return;
    }
});

function esconderImagemAtual() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
};


function mostrarProximaImagem() {
    imagens[imagemAtual].classList.add("mostrar");
};

setaVoltar.addEventListener("click", function() {
    if(imagemAtual > 0) {
        esconderImagemAtual();
        imagemAtual--;
        mostrarImagemAnterior();
    } else {
        setaVoltar.classList.add("opacidade");
        return;
    }
});

function mostrarImagemAnterior() {
    imagens[imagemAtual].classList.add("mostrar");
};
