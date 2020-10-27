

function acaoBotao () {
    var sairloop, v1, v2
    do {
        v1 = prompt("Digite o primeiro valor")
        v2 = prompt("Digite o seggundo valor")
    document.getElementById("paragrafo").innerText = "Resultado" + (parseInt(v1) + parseInt(v2) )
        sairloop = prompt("Deseja sair S/N")   
    } while(sairloop == "N")
}