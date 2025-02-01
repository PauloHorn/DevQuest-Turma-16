let usuario = {
    nome: "Paulo",
    excluir: function(){
        console.log("O usuário, " + this.nome + " foi excluído!");
    }
};

usuario.excluir();
