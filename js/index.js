
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

let vida = document.getElementById('vida')
let valorvida = 3

vida.innerHTML = `${valorvida}`

let pontos = document.getElementById('pontos')
let valorpontos = 0
pontos.innerHTML = `${valorpontos}`

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
            vencedor = "Ops, você perdeu!"
            valorvida--
        } else {
            vencedor = "Parabéns, tu ganhou boy!"
            valorpontos++
        }
    } else if (jogadorEscolha == "PAPEL") {
        if (computadorEscolha == "PEDRA") {
            vencedor = "Parabéns, tu ganhou boy!"
            valorpontos++
        } else if (computadorEscolha == "PAPEL") {
            vencedor = "EMPATE"
        } else {
            vencedor = "Ops, você perdeu!"
            valorvida--
        }
    } else if (jogadorEscolha == "TESOURA") {
        if (computadorEscolha == "PEDRA") {
            vencedor = "Ops, você perdeu!"
            valorvida--
        } else if (computadorEscolha == "PAPEL") {
            vencedor = "Parabéns, tu ganhou boy!"
            valorpontos++
        } else {
            vencedor = "EMPATE"
        }
    } else {
        alert ("Selecione uma opção ESSA GALERA XD")
    }

    if (valorvida == 0 || valorpontos == 3){
    if (valorvida == 0 ){
        alert ("GAME OVER LOSER!!!")
    }    else if (valorpontos == 3) {
        alert ("YOU ARE THE CHAMPION!")
    }
        valorvida = 3
        valorpontos = 0
        vida.innerHTML = `${valorvida}`
        pontos.innerHTML = `${valorpontos}`
        

    }


    vida.innerHTML = `${valorvida}`
    pontos.innerHTML = `${valorpontos}`
    alert(`Você selecionou ${jogadorEscolha}, e o CPU escolheu ${computadorEscolha}... logo: ${vencedor}`)
    

}

function reset() {
  valorvida = 3
  vida.innerHTML = `${valorvida}`
  valorpontos = 0
  pontos.innerHTML = `${valorpontos}`
}


