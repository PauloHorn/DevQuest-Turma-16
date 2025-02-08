const btnTrocarCor = document.getElementById("btn-trocar-cor");

const quadradoAzul = document.querySelector(".azul");

function trocarDeCor() {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
};
