function adicionarComentario() {
    let inputComentario = document.getElementsByName("novo-comentario");

    let textoDgitado = inputComentario[0].value;

    let novosComentarios = document.getElementById("novos-comentarios");

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDgitado}`;// seria a mesma coisa de escrever assim: novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Novo comentário: ${textoDgitado}`;
};
