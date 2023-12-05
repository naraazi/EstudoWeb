//desativar a funcao nativa de um link
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
});

//desativar a submissao do form
document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
});

//cuidado com a propagacao
document.querySelector('.caixa').addEventListener('click', () => {
    console.log('DIV');
})