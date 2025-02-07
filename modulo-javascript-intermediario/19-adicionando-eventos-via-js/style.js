// let SelectDeEstado = document.querySelector("select[name = 'estado']");

// SelectDeEstado.addEventListener('change', function() {
//     alert("mudou o select")
// });

// console.log(SelectDeEstado);


//uma outra forma de fazer sem criar uma variável:

// document
// .querySelector("select[name = 'estado']")
// .addEventListener('change', function() {
//     alert("mudou o select")
// });


//agora para que peguemos o valor selecionado:

document
.querySelector("select[name = 'estado']")
.addEventListener('change', function() {
    console.log(event.target.value)
});
