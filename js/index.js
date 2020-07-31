
let jogadorEscolha

function escolhaDoJogador(escolha) {

    if (escolha == 0) {
        jogadorEscolha = "PEDRA"
    } else if (escolha == 1) {
        jogadorEscolha = "PAPEL"
    } else {
        jogadorEscolha = "TESOURA"
    }


}


function jogar() {

    let computadorEscolha = Math.floor(Math.random() * 3)

    

    if (computadorEscolha == 0) {
        computadorEscolha = `PEDRA`
    } else if (computadorEscolha == 1) {
        computadorEscolha = `PAPEL`
    } else {
        computadorEscolha = `TESOURA`
    }

    let vencedor = "nulo"


    if (jogadorEscolha == "PEDRA") {
        if (computadorEscolha == "PEDRA") {
            vencedor = "EMPATE"
        } else if (computadorEscolha == "PAPEL") {
            vencedor = "COMPUTADOR"
        } else {
            vencedor = "JOGADOR"
        }
    } else if (jogadorEscolha == "PAPEL") {
        if (computadorEscolha == "PEDRA") {
            vencedor = "JOGADOR"
        } else if (computadorEscolha == "PAPEL") {
            vencedor = "EMPATE"
        } else {
            vencedor = "COMPUTADOR"
        }
    } else if (jogadorEscolha == "TESOURA") {
        if (computadorEscolha == "PEDRA") {
            vencedor = "COMPUTADOR"
        } else if (computadorEscolha == "PAPEL") {
            vencedor = "JOGADOR"
        } else {
            vencedor = "EMPATE"
        }
    } else {
        alert ("ERRO INESPERADO")
    }

    alert(`${jogadorEscolha} ${computadorEscolha} ${vencedor}`)
    

}
