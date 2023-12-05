let img = document.querySelector('img');
let link = document.querySelector('a');

//retorna o valor que esta atribuido ao atributo
console.log(img.getAttribute('src'));
console.log(link.getAttribute('href'));

//define/alterar o valor de um atributo - setAttribute('novoAtributo', 'novoValor')
img.setAttribute('src', 'images/image_2.jpg');
link.setAttribute('href', 'https://www.spacex.com/');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'SpaceX');

//remover atributo do elemento
link.removeAttribute('href');
link.removeAttribute('title');
