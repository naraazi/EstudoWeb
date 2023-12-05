function evento(){
    document.querySelector("h1").textContent = "Novo texto"
}

//add event listener
// let botao = document.querySelector("button")
// botao.addEventListener('click', evento) //(EVENTO, FUNCAO)

//forma mais comum de fazer
// let botao = document.querySelector("button")
// botao.addEventListener('click', function() {
//     console.log('clique')
// })

//forma mais elegante de fazer
// let botao = document.querySelector("button")
// botao.addEventListener('click', () => console.log('clique'))

//versao3 de fazer o mesmo
document.querySelector("button").addEventListener('click', (e) => {
    console.log('clique')
    e.target.textContent = "Alterado"
    document.querySelector("h1").textContent = "Texto alterado"
})