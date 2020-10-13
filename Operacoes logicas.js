/*
 passou <- falso
     Escreval(" Nome do aluno 1: ")
     leia (nome)
     Escreval(" Nota 1: ")
     leia(n1)
     Escreval(" Nota 2: ")
     leia(n2)
     Media <- (n1 + n2) /2
     
      Se media >= 50 então
       Passou<- Verdadeiro
      Fimse
      
      Se ( aassou ) && ( Media >= 50 || media <= 70) entao
           Escreval("Reprovado ", nome)
      Senao
           Escreval("Aprovado ", nome)
      Fimse
*/

var nome, nota01, nota02;

passou = false;

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Informe a nota 01")
nota02 = prompt("Informe nota 02")

media = (parseint(Nota01)+ parseint(nota02)) /2;

if (media >= 50)
    passou = true;

if( passou && (media >=70 && media <=90))
     alert("Aprovado!" + nome)
 else
    alert("Reprovado!" + nome)