//if
let avaliacao = 3;

if (avaliacao == 1) {
    console.log("Mau resultado");
}
else if (avaliacao == 2) {
    console.log("Resultado negativo");
}
else if (avaliacao == 3) {
    console.log("Resultado positivo");
}
else if (avaliacao == 4) {
    console.log("Resultado bom");
}
else {
    console.log("Resultado excelente");
}

//operador ternario
let valor = 10;
let frase = valor < 5 ? "SIM" : "NÃO";
console.log(frase);