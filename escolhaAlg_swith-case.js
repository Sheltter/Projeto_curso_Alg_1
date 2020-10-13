/*

  escolha op
          caso("+")
           R<- N1+N2
          caso("-")
           R<- N1-N2
          caso("*")
           R<- N1*N2
          caso("/")
           R<- N1/N2
  fimescolha

*/

function acaoBotao(){
    var n1, n2, s, op
    n1 = prompt(" informe o primeiro numero: ")
    op = prompt("Informe a operação. Ex + - * /") 
    n2 = prompt("informe o segundo numero: ")

    switch (op) {
        case "+":
            s = parseInt ( n1 ) + parseInt( n2 ) 
            break;
        case "-":
            s = parseInt ( n1 ) - parseInt( n2 )  
            break;
        case "/":
            s = parseInt ( n1 ) / parseInt( n2 )  
            break;
        case "*":
            s = parseInt ( n1 ) * parseInt( n2 ) 
            break;
    }
    document.getElementById("paragrafo").innerText = s
}