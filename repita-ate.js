/*
Var
     sairloop: caractere
     v1, v2:real

     inicio

        repita
            escreva("Digite o primeiro valor")
            leia(v1)
            escreva("Digite o seggundo valor")
            leia(v2)
            escreval("Resultado", v1+v2)
            escreval("Deseja sair? S/N"
            leia (sairloop)
        ate sairloop <> "N"

Fimalgoritmo

*/ 

function acaoBotao () {
    var sairloop, v1, v2
    do {
        v1 = prompt("Digite o primeiro valor")
        v2 = prompt("Digite o seggundo valor")
    document.getElementById("paragrafo").innerText = "Resultado" + (parseInt(v1) + parseInt(v2) )
        sairloop = prompt("Deseja sair S/N")   
    } while(sairloop == "N")
}