//cria um elemento e lhe da um valor
let novo_elemento = document.createElement('p');
novo_elemento.innerText = "Texto do parágrafo";

//adiciona o elemento filho ao pai
document.body.appendChild(novo_elemento);

//adiciona conteudo sem tag
var conteudo_de_texto = document.createTextNode("Damn!");
document.body.appendChild(conteudo_de_texto);

//adiciona o paragrafo a um dos divs (ou outros)
let div = document.querySelector("#elemento_1");
div.appendChild(novo_elemento); // AGR "novo_elemento" ESTA EM UM DIV

//cria um novo elemento e adiciona atributo/valor
let novo_div = document.createElement("div");
novo_div.classList.add("elemento");
novo_div.setAttribute("id", "elemento_2");

let titulo = document.createElement("h1");
titulo.textContent = "Titulo H1";
novo_div.appendChild(titulo);
document.body.appendChild(novo_div);
