//FUNÇÃO ESCOLHA DO COMPUTADOR

let computador = Math.floor(Math.random() * 3)
//let computador = 0
let computadorEscolha

if (computador == 0) {
    computadorEscolha = `PEDRA`
} else if (computador == 1) {
    computadorEscolha = `PAPEL`
} else {
    computadorEscolha = `TESOURA`
}

//alert(`A escolha do computador foi ${computadorEscolha}`)


//FUNÇÃO ESCOLHA DO JOGADOR

let escolha = document.getElementById("inputusuario")
/*A variável 'escolha' precisa ser forçada com o comando abaixo,
e inativado o comando acima para realizar os testes de console.log. 
Caso se realizem testes com a declaração acima ativa, o teste vai dar
erro porque não há um documento HTML para ser consultado.*/
//let escolha = 0

let jogadorescolha = "nulo"

if (escolha == 0) { 
    jogadorescolha = "PEDRA"
  } else if (escolha == 1) {
      jogadorescolha = "PAPEL"
  } else {
      jogadorescolha = "TESOURA"
  }


//VALIDAÇÃO DE VENCEDOR

let vencedor = "nulo"

if (computadorEscolha == "PEDRA") {
    if (jogadorescolha == "PEDRA") {
        vencedor = "EMPATE"
    } else  if (jogadorescolha == "PAPEL") {
        vencedor = "JOGADOR"
    } else {
        vencedor = "COMPUTADOR"
    }
} else if (computadorEscolha == "PAPEL") {
    if (jogadorescolha == "PEDRA") {
        vencedor = "COMPUTADOR"
    } else  if (jogadorescolha == "PAPEL") {
        vencedor = "EMPATE"
    } else {
        vencedor = "JOGADOR"
    }
} else if (computadorEscolha == "TESOURA") {
    if (jogadorescolha == "PEDRA") {
        vencedor = "JOGADOR"
    } else  if (jogadorescolha == "PAPEL") {
        vencedor = "COMPUTADOR"
    } else {
        vencedor = "EMPATE"
    }
} else {
    //window.alert ("ERRO INESPERADO")
}


//TESTE DE FUNCIONAMENTO

console.log(`a escolha do computador é ${computadorEscolha}`)
console.log(`a escolha do jogador é ${jogadorescolha}`)
console.log(`resultado de vitória: ${vencedor}`)