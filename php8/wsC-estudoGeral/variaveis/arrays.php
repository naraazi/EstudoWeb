<?php

$nomes = ["joao", "ana", "carlos"];

//Escolhe via 'chave automativa'
$nomes[0];

//Atribuindo chaves personalizadas - os indexes podem ser alfanumericos
$nomes = [
    10 => "joao",
    20 => "ana",
    30 => "carlos",
    "mae" => "Aurea"
];

//Verificar se aquele index/valor existe
isset($nomes[100]);

//Adicionar valores no final de um array
array_push($nomes, "pedro", "marcio");
//Adicionar valores no inicio
array_unshift($nomes, "joao");

//Adicionar valores com alfanumerico
$nomes['pai'] = "Julie";

//Remover valor em um array
unset($nomes[20]);

//Consumir um valor do final do array
$primeiroNome = array_pop($nomes);
//Consumir um valor do inicio
$ultimoNome = array_shift($nomes);

//Criar um novo array a partir de uma porção de outro array
$nomesPartes = array_slice($nomes, 2);

// ------------------------------------------------------------------------------

//Arrays multidimensionais - arrays com arrays dentro
$lojas = [
    'porto' => [
        'telefone' => '12345',
        'email' => 'porto@gmail.com'
    ],

    'lisboa' => [
        'telefone' => '6789',
        'email' => 'lisboa@gmail.com'
    ],

    'coimbra' => [
        'telefone' => '101112',
        'email' => 'coimbra@gmail.com'
    ],
];

//Apresentando um valor específico de arrays multidimensionais
echo $lojas['lisboa']['email'];

//Arrays numericos podem ser multidimensionais
$notas = [
    [10, 20, 30],
    [100, 200, 300],
    [1000, 2000, 3000]
];
echo $notas[2][0]; //1000

//Verificar se há uma determinada chave no array - normalmente multidimensional
var_dump(key_exists('telefone', $lojas));

?>