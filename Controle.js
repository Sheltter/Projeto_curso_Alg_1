
/*
Escreval("Digite o nome do aluno: ")
 Leia(Nome)
Escreval("Digite a nota 1: ")
 leia (N1)
Escreval("Digite a nota 2: ")
 Leia(N2)
    Media<- (N1+N2)/2

    Se media >=5 entao
        Escreval("Aprovado", nome)
        Senao
        Escreval("Reprovado", nome)
    Fimse
*/

var nome, N1, N2, media;
    nome = prompt("Digite o nome do aluno: ")
    N1 = prompt("Nota 1: ")
    N2 = prompt("Nota 2: ")

    media = (parseInt(N1) + parseInt(N2)) / 2;

    if (media >=50)
        alert("Aprovado")
    else
        alert("reprovado")