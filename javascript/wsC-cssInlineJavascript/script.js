//muda atributo css inline
let styCo = document.querySelector("h1");
styCo.style.color = "red"; //COR DA FONTE
styCo.style.backgroundColor = "yellow"; //COR DA BACKGROUND

//buscar informacoes
console.log(styCo.style.backgroundColor);

//buscar dados implicitos
let getComp = document.querySelector('p');
const estilos = window.getComputedStyle(getComp);
console.log(estilos.getPropertyValue('font-size'));
