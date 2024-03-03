<h1>Funcionalidades do codigo</h1>
<br>
1 - listaIngresso é um objeto que armazena a quantidade disponível de ingressos para cada tipo de ingresso (pista, superior, inferior).
<br><br>
2 - A função comprar() é chamada quando o usuário clica em um botão para comprar ingressos. Ele obtém a quantidade desejada de ingressos do elemento HTML com o id qtd e, em seguida, chama a função calcula() passando o tipo de ingresso selecionado pelo usuário como argumento.
<br><br>
3 - A função calcula(tipoEscolhido) verifica se a quantidade desejada de ingressos (qtd) é maior do que a quantidade disponível para o tipo de ingresso escolhido. Se for maior, exibe um alerta informando que apenas a quantidade disponível de ingressos está disponível.
<br><br>
4 - Se a quantidade desejada de ingressos for igual ou menor do que a quantidade disponível, a quantidade disponível é atualizada e exibida no elemento HTML correspondente. Se a quantidade disponível for menor ou igual a zero, exibe "ESGOTADO".