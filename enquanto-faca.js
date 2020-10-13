/*
var
   nome: caractere
   idade, limite, contador: inteiro
inicio
      Escreva("Digite o numero de vezes que vai ser verificado a idade: ")
      Leia(limite)
      contador <- 0
      enquanto contador < limite faca
          Escreva("Digite o nome da pessoa: ")
          Leia(nome)
          Escreva(" Digite a idade de ", nome , ": ")
          Leia(idade)
          se idade > 18 entao
             escreva(nome ," É maior de idade!")
          senao
             escreva(nome, " É menor de idade!")
          fimse
          contador <- contador + 1
      fimenquanto
*/

function acaoBotao(){
    var nome, idade, limite, contador
    limite = prompt("Digite o numero de vezes que vai ser verificado a idade: ")
    contador = 0
    
        while (contador < limite){
            nome = prompt("Digite o nome: ")
            idade = prompt("Digite a idade do ")
            if ( idade > 18 )
                document.getElementById("paragrafo").innerText = nome + "Vc é de maior"
            else
                document.getElementById("paragrafo").innerText = nome + "Vc é de menor"
            contador++
            } 
        } 


