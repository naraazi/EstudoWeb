let botao = document.querySelector('button')

//addEventListener
botao.addEventListener('click', function(){
    document.querySelector('h1').textContent = "Texto alterado"
})

botao.addEventListener('click', function(){
    console.log('clique')
})