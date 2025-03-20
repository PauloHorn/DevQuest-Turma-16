const dataAtual = new Date();
console.log(`A data completa é: ${dataAtual}.`);

const dia = dataAtual.getDate();
console.log(`O dia atual é: ${dia}.`);

const mes = dataAtual.getMonth() + 1; //em JS janeiro é o mês zero
console.log(`O mês atual é: ${mes}.`);

const ano = dataAtual.getFullYear();
console.log(`O ano atual é: ${ano}.`);


//Fazendo contas com datas em JS
const dataDeNascimeto = new Date("1987-02-13");
console.log(`A data de nascimento é: ${dataDeNascimeto}.`);

const diferencaEmMilissegundos = dataAtual - dataDeNascimeto;
console.log(diferencaEmMilissegundos);

const idade = Math.floor(diferencaEmMilissegundos/(1000*60*60*24*365.25));
console.log(`A idade é de: ${idade} anos.`);

const dataFormatada = dataAtual.toLocaleDateString("pt-BR");
console.log(`A data no formato brasileiro é: ${dataFormatada}.`);

const formatoIntl = new Intl.DateTimeFormat("pt-BR", {weekday: "long", year: "numeric", month: "long", day: "numeric"});

const dataFormatadaIntl = formatoIntl.format(dataAtual);
console.log(dataFormatadaIntl);
