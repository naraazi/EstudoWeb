let i, tmp, id;

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        detele_elements()

        for (i = 0; i <= 250; i += 10) {
            tmp = document.createElement('div');
            tmp.classList.add('caixa');
            id = event.target.id;

            if (id === 'btn_vermelho') {
                tmp.style.backgroundColor = `rgb(${i}, 0, 0)`;
            }
            else if (id === 'btn_verde') {
                tmp.style.backgroundColor = `rgb(0, ${i}, 0)`;
            }
            else {
                tmp.style.backgroundColor = `rgb(0, 0, ${i})`;
            }
            document.body.appendChild(tmp);
        }
    });
});

function detele_elements() {
    let elementos = document.querySelectorAll(".caixa");
    elementos.forEach (e => e.remove());
}