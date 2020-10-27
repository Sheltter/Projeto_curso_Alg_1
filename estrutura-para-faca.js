function acaoBotao(){
    var numero, contador, fatorial 
    numero = prompt(" Informe o numero da fatorial ")
    fatorial = 1

    /* Para contador receber 1, contador tem que ser <= ao numero, faça contador acrecentar ao loop */
    for ( contador = 1; contador <= numero; contador ++) {
        fatorial = fatorial * contador
    }
    
    document.getElementById("paragrafo").innerText = " Fatorial de " + numero + " é: " + fatorial
    }