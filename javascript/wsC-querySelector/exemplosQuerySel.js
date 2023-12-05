//busca o primeiro elemento do documento
document.querySelector('*'); //PODE SER TROCADO POR OUTROS ELEMENTOS HTML OU QUALQUER OUTRA COISA

//busca todos os elementos do documento
document.querySelectorAll('*'); //PODE SER TROCADO POR OUTROS ELEMENTOS HTML OU QUALQUER OUTRA COISA

//busca por classe
document.querySelector(".texto"); //MESMA LOGICA COM O querySelectorAll

//busca por id
document.querySelector("#texto");

//retorna todos os elementos que contem o atributo "name"
document.querySelectorAll('[name]');

//retorna todos os elementos HTML paragrafos que contem o atributo "name"
document.querySelectorAll('p[name]'); //FUNCIONA COM OUTROS ELEMENTOS HTML

//retorna todos os elementos que contem o atributo "name" e cujo "value" seja "texto"
document.querySelectorAll("[name='texto']");

//retorna todos os elementos que contem o atributo "class" e cujo "value" tem
//varias palavras separadas por espacos e uma delas e "letra"
document.querySelectorAll("[class~='letra']");

//retorna todos os elementos cujo atributo "class" tem um "value" que comeca 
//por uma determinada palavra
document.querySelectorAll("[class^='color']");

//retorna todos os elementos cujo atributo "class" tem um "value" que termina
//com a expressao "size"
document.querySelectorAll("[class$='size']");

//retorna todos os elementos cujo atributo "class" tem a palavra "text" pelo menos uma vez
document.querySelectorAll("[class*='text']");

//retorna todos os elementos html colocados
document.querySelectorAll("div, p, h1");

//retorna todos os elementos html descedentes
document.querySelectorAll("div ul li");

//retorna os descendentes diretos
document.querySelectorAll("div > h3");
