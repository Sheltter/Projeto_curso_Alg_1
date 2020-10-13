
/*
var
   N1, N2, S: Real
   Op: caractere
inicio

      Escreval(" Informe o primeiro numero: ")
      Leia (N1)
      Escreval(" Informe a operação Ex: + , - , * , / .")
      Leia (Op)
      Escreval(" Informe o segundo numero: ")
      Leia (N2)

      Se op = "+" Entao
         S <- N1+N2
      Senao
           Se op = "-" Então
               S <- N1-N2
           Senao
                Se op = "*" Entao
                   S <- N1*N2
                Senao
                     Se Op = "/" entao
                        S<- N1/N2
                     Fimse
                Fimse
           Fimse
      Fimse

      Escreval("Seu resultado é: ", S)
*/

var n1, n2, s, op

function acaoBotao(){
    n1 = prompt(" informe o primeiro numero: ")
    op = prompt("Informe a operação. Ex + - * /") 
    n2 = prompt("informe o segundo numero: ")

    if ( op == "+") {
        s = parseInt ( n1 ) + parseInt( n2 )
    }else if ( op == "-"){
        s = parseInt ( n1 ) - parseInt ( n2 )
    }else if ( op == "/" ){
        s = parseInt ( n1 ) / parseInt ( n2 )
    }else if ( op =="*"){
        s = parseInt( n1 ) * parseInt ( n2 )
    }
    document.getElementById("paragrafo").innerText = s
}

        
