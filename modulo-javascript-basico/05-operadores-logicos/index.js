var a = 3;
var b = 4;
console.log(a == b);//comparação de igualdade retorna false

console.log(a != b);//comparação de diferença retorna true

var b = "3";
console.log(a === b);//comparação de idêntico retorna false

console.log(a !== b);//comparação de não idêntico retorna true

var b = 4;
console.log(a > b);//comparação de maior que retorna false

console.log(a < b);//comparação de menor que retorna true

console.log (a < b && a === b); //comparação das duas afirmações retornará false

console.log (a<b || a===b); //comparação das duas afirmações de forma independente retornará true

console.log (!(a<b || a===b)); //negação da comparação das duas afirmações de forma independente retornará false
