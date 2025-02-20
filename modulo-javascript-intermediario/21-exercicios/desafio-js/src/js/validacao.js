const botaoEnviar = document.getElementById("btn-enviar");


botaoEnviar.addEventListener("click", function () {
    const inputText = document.querySelectorAll(".input-text");
    const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");
    let contador = 0;

    inputText.forEach(input => {
        if(input.value === "") {
            input.classList.add("sem-preenchimento");
            campoObrigatorio[contador].classList.add("mostrar");
            contador++;
        } else {
            input.classList.add("preenchido");
            campoObrigatorio[contador].classList.remove("mostrar");
            contador++;
        };
    });
});
