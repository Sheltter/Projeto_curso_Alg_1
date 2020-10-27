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


