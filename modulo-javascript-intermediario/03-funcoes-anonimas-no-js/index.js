//Expressão de função anônima:

const minhaFuncaoAnonima = function(parametro1, parametro2) {
    // Corpo da função
    return parametro1 + parametro2;
  };
  
  console.log(minhaFuncaoAnonima(5, 3)); // Imprime 8
  


  //Função anônima imediatamente invocada (IIFE - Immediately Invoked Function Expression):
  (function() {
    // Código a ser executado imediatamente
    console.log("Esta função anônima foi executada imediatamente!");
  })(); // Os parênteses finais () invocam a função imediatamente
  