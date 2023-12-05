//while
let valor = 0;
while (valor < 10) {
    console.log(valor);
    valor++;
}

//do while
do {
    console.log(valor);
    valor++;
} while (valor < 10);

//for 
for (valor = 0; valor < 10; valor++) {
    console.log(valor);
}

//for in
let valores = [1, 2, 3, 4, 5];
for (valor in valores) {
    console.log(valor);
}

//for of
let nomes = ["joao", "ana", "carlos"];
for (nome of nomes) {
    console.log(nome);
}

//foreach
nomes.forEach((n) => console.log(n));
