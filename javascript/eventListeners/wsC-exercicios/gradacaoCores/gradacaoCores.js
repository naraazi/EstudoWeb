/* 
OBJETIVO:
Apresentar 25 caixas em stack vertical
com gradação de cores vermelho, verde ou azul
com variação do valor RGB em 10 pontos
*/

let i;
let tmp;

document.querySelector("#btn_vermelho").addEventListener("click", () => {
    detele_elements()
    for (i = 0; i <= 250; i += 10) {
        tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(${i}, 0, 0)`;
        document.body.appendChild(tmp);
    }
});

document.querySelector("#btn_verde").addEventListener("click", () => {
    detele_elements()
    for (i = 0; i <= 250; i += 10) {
        tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(0, ${i}, 0)`;
        document.body.appendChild(tmp);
    }
});

document.querySelector("#btn_azul").addEventListener("click", () => {
    detele_elements()
    for (i = 0; i <= 250; i += 10) {
        tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(0, 0, ${i})`;
        document.body.appendChild(tmp);
    }
});

function detele_elements() {
    let elementos = document.querySelectorAll(".caixa");
    elementos.forEach (e => e.remove());
}
