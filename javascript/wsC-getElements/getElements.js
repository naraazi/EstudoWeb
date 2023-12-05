//getElements
document.getElementsByClassName(); //DEVOLVE UM HTMLCOLLECTION (ARRAY)
document.getElementsByName(); //DEVOLVE UMA NODELIST (ARRAY)
document.getElementsByTagName(); //DEVOLVE UM HTMLCOLLECTION (ARRAY)

//getElementsByClassName
let className;
className = document.getElementsByClassName("outra-noticia");
className[0].innerText = "Nova notícia"; //ALTERA A STRING DA POSICAO 0 DO ARRAY PARA "Nova notícia"

//getElementsByName
let byName;
byName = document.getElementsByName("text_usuario"); 
byName[0].value = "Joao"; //NO ELEMENTO QUE TEM "text_usuario" NO "name=", SERA ADD UM "value=Joao"

//getElementsByTagName
let byTag;
byTag = document.getElementsByTagName("p"); 
console.log(byTag);