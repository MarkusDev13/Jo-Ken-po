function jogar() {


    let computador = Math.floor(Math.random() * 3)
    let computadorEscolha

    if (computador == 0) {
        computadorEscolha = `PEDRA`
    } else if (computador == 1) {
        computadorEscolha = `PAPEL`
    } else {
        computadorEscolha = `TESOURA`
    }

    alert(`A escolha do computador foi ${computadorEscolha}`)
}