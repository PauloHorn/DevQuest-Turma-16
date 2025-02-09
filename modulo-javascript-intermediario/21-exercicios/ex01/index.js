const btnTrocarCor = document.getElementById("btn-trocar-cor");

const quadradoCorTrocada = document.getElementsByClassName("quadrado");

function trocarDeCor() {
    if (quadradoCorTrocada[0].classList.contains("azul")){
        quadradoCorTrocada[0].classList.remove("azul");
        quadradoCorTrocada[0].classList.add("amarelo");
    } else if (quadradoCorTrocada[0].classList.contains("amarelo")){
        quadradoCorTrocada[0].classList.remove("amarelo");
        quadradoCorTrocada[0].classList.add("azul");
    }
};

//função melhorada depois de ter feito o exercício 3