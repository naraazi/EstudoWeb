//FUNCAO NORMAL
//sem parametros
function escrever() {
    console.log('Aqui está a frase da função.');
}

//com parametros
function escrever2(mensagem) {
    console.log(mensagem);
}

//com retorno
function adicionar(a, b) {
    return a + b;
}

//default values
function saudacao(mensagem = "Bom dia!") {
    console.log(mensagem); //SE CHAMAR A FUNCAO COM UM PARAMETRO, O VALOR DEFAULT É OVERRIDE
}
saudacao(); //"Bom dia!"
saudacao("Boa noite!"); //"Boa noite!"

//FUNCTION EXPRESSION
let funcao = function() {
    console.log("Texto da função.");
} //O MESMO QUE UMA FUNCTION NORMAL POREM TEM QUE INICIALIZAR A VARIAVEL PRIMEIRO PRA DPS USAR

//ARROW FUNCTION
let funcao1 = (a, b) => {
    return a + b; //CASO TENHA MAIS DE UM COMANDO
}

let adicao = (a, b) => a + b; //CASO SÓ TENHA 1
