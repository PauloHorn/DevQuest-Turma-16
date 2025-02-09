let quadrado = document.getElementsByClassName("quadrado");

let quadradoColorido = quadrado[0];

let botao = document.getElementById("trocar-de-cor");

function trocarCor() {
    if (quadradoColorido.classList.contains("azul")) {
        quadradoColorido.classList.remove("azul");
        quadradoColorido.classList.add("preto");
    } else if (quadradoColorido.classList.contains("preto")) {
        quadradoColorido.classList.remove("preto");
        quadradoColorido.classList.add("azul");
    };
};
