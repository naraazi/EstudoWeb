<?php

$ficheiro = file("teste.txt"); //gera erro pois nao existe
$ficheiro = @file("teste1.txt"); //simplesmente ignora a linha caso nao exista o .txt

?>