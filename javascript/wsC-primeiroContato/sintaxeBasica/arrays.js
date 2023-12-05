//PARTE 1
//array normal
let nomes = ["joao", "ana", "carlos"];

//todos os elementos
console.log(nomes);

//"ana" - selecionando valores especificos
console.log(nomes[1]);

//mostra no console um quadro com o index | value
console.table(nomes);

//alterar valores via index
nomes[1] = "maria";

//numeros de elementos num array
console.log(nomes.length);

//adiciona elemento no final do array
nomes.push("joaquim");

//adiciona elemento no inicio do array
nomes.unshift("josé");

//remove elemento do inicio
nomes.shift();

//remove elemento do fim
nomes.pop();

//REMOVER ELEMENTOS PERMITE QUE ELES SEJAM GUARDADOS
let removido = nomes.pop();

//.splice(<valInicioIndex>, <numerosElementosRemocao>, <valAdicionado>, ...);
nomes.splice(1, 2, "joaquim", "manuel", "rui"); //POSSIVEL GUARDAR OS ELIMINADOS DO .splice(); COMO O .pop();

//PARTE DOIS

//extrai partes de um array para retornar um novo
let nome_extraidos = nome.slice(0, 2);

//juntar dois arrays
let outros_nomes = ["joaquim", "carla", "manuel"];
nomes = nomes.concat(outros_nomes);

//procura item num array - retorna booleano
console.log(nomes.includes("carlos"));

//procura posicao de um item - retorna int
console.log(nome.indexOf("ana"));

//converte array em uma string
let todos_os_nomes = nomes.join("-");

//ORDENAR ARRAYS - ele nao trata numeros da forma 'correta', apenas com funcoes (usar com seguranca)

//ordenacao ascendente
nomes.sort();

//ordenacao descendente
nomes.sort().reverse();
