<?php

//Heredoc - ajuda em textos maiores (também tags de HTML) -> StringBuffer
$valor1 = 100;
$valor2 = 200;
$valor3 = 300;

$relatorio = <<<TEXT
O valor 1 = $valor1
O valor 2 = $valor2
O valor 3 = $valor3
TEXT;

echo $relatorio;
?>