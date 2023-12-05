let avaliacaoCase = 50;

//pode haver mais de 2 cases:
switch (avaliacaoCase) {
    case 0:
    case 1:
        console.log("Resultado mau");
        break;
    case 2:
        console.log("Resultado insuficiente");
        break;
    case 3:
        console.log("Resultado positivo");
        break;
    case 4:
        console.log("Resultado bom");
        break;
    case 5:
        console.log("Resultado excelente");
        break;    
    default:
        console.log("Avaliação inválida");
        break;
}
