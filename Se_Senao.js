

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

        
