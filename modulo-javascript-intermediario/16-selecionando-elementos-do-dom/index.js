console.log(document);

let p = document.getElementById("paragrafo1");

console.log(p);

p.textContent = "Novo texto inserido";

let inputPorNames = document.getElementsByName("email");

console.log(inputPorNames);

let inputPorTag = document.getElementsByTagName("h1");

console.log(inputPorTag);

let inputPorName = document.querySelectorAll("input[name = 'email']");

console.log(inputPorName);
