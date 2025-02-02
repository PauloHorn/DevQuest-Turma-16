let usuario = {
    nome: "Paulo",
    excluir: function(){
        console.log("O usuário, " + this.nome + " foi excluído!");
        console.log(`Isto é só um exemplo, ${this.nome}, não se preocupe.`);
    }
};

usuario.excluir();
