let container = document.querySelector('section');

//ver o texto que ha dentro da classe da querySelector
console.log(container.className);

//alterar o valor de class
container.className = "container" //SO HA "container" EM CLASS AGR
console.log(container.className);

//adicionar mais uma classe
container.className += " container-dark"; // class="container container-dark"

//classList retorna uma list com as classes usadas no elemento
console.log(container.classList);

//adicionar classes
container.classList.add('container-light'); //PODE ADD MAIS DE UM

//remover uma class
container.classList.remove('container-light'); //PODE REMOVER MAIS DE UM

//adicionar/remover class
container.classList.toggle('container'); //SE "container" EXISTE, SERA REMOVIDA, SENAO, SERA ADD

//verificar se ha uma classe no elemento
if (container.classList.contains('container')) {
    console.log('A classe container existe.');
} 
else {
    console.log('A classe container não existe.');
}
