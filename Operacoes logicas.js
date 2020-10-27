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