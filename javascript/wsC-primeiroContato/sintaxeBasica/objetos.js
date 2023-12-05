let pessoa = {
    nome: "Joao",
    apelido: "Ribeiro",
    idade: 48,
    genero: "masculino",
    hobbies: [
        'Programação',
        'Cinema',
        'Música'
    ],

    apresentar_nome: function() {
        return this.nome + " " + this.apelido;
    },

    apresentar_idade: function() {
        return this.idade + " anos de idade.";
    }
};

//apresentar os dados
console.log(pessoa.nome);
console.log(pessoa['genero']);
console.log(pessoa.apresentar_nome());
console.log(pessoa.apresentar_idade());
console.log(pessoa.hobbies); //VEM UM ARRAY

//adicionar propriedades aos objetos
pessoa.email = "joao.ribeiro@gmail.com";
pessoa['mobile'] = '123456789';

//eliminar propriedades de um objeto
delete pessoa.idade;

//criar um novo objeto a partir de outro
let outra_pessoa = Object.assign({}, pessoa);
//outra forma
let pessoa_3 = {...pessoa};
