const btnTrocarCor = document.getElementById("btn-trocar-cor");

const quadradoCorTrocada = document.getElementsByClassName("quadrado");

function trocarDeCor() {
    quadradoCorTrocada[0].classList.remove("azul");
    quadradoCorTrocada[0].classList.add("amarelo");
};
