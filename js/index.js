let jogadorEscolha;

function escolhaDoJogador(escolha) {
  if (escolha == 0) {
    jogadorEscolha = "PEDRA";
    document.getElementById("label-pedra").style.background = "yellow";
    document.getElementById("label-papel").style.background = "none";
    document.getElementById("label-tesoura").style.background = "none";
  } else if (escolha == 1) {
    jogadorEscolha = "PAPEL";
    document.getElementById("label-papel").style.background = "yellow";
    document.getElementById("label-tesoura").style.background = "none";
    document.getElementById("label-pedra").style.background = "none";
  } else {
    jogadorEscolha = "TESOURA";
    document.getElementById("label-tesoura").style.background = "yellow";
    document.getElementById("label-pedra").style.background = "none";
    document.getElementById("label-papel").style.background = "none";
  }
}

// O JOGO



let mostrarModal = document.getElementsByClassName('modal-vencedor-jogo')[0].style.display = "none"
let vencedorRodada = document.getElementById("resultado-rodada");
let vencedorJogo = document.getElementById("resultado-jogo");

let vida = document.getElementById("vida");
let valorvida = 3;
vida.innerHTML = `${valorvida}`;

let pontos = document.getElementById("pontos");
let valorpontos = 0;
pontos.innerHTML = `${valorpontos}`;

function jogar() {
  let computadorEscolha = Math.floor(Math.random() * 3);
 
  vencedorRodada.innerHTML = "";
  

  if (computadorEscolha == 0) {
    computadorEscolha = `PEDRA`;
    document.getElementsByClassName(`pedra-pc`)[0].style.display = "block"
    document.getElementsByClassName(`papel-pc`)[0].style.display = "none"
    document.getElementsByClassName(`tesoura-pc`)[0].style.display = "none"
  } else if (computadorEscolha == 1) {
    computadorEscolha = `PAPEL`;
    document.getElementsByClassName(`papel-pc`)[0].style.display = "block"
    document.getElementsByClassName(`pedra-pc`)[0].style.display = "none"
    document.getElementsByClassName(`tesoura-pc`)[0].style.display = "none"
  } else {
    computadorEscolha = `TESOURA`;
    document.getElementsByClassName(`tesoura-pc`)[0].style.display = "block"
    document.getElementsByClassName(`pedra-pc`)[0].style.display = "none"
    document.getElementsByClassName(`papel-pc`)[0].style.display = "none"
  }

  if (jogadorEscolha == "PEDRA") {
    if (computadorEscolha == "PEDRA") {
      vencedorRodada.innerHTML = "Essa rodada foi empate";
    } else if (computadorEscolha == "PAPEL") {
      vencedorRodada.innerHTML = " você perdeu a rodada";
      valorvida--;
    } else {
      vencedorRodada.innerHTML = " você ganhou a rodada";
      valorpontos++;
    }
  } else if (jogadorEscolha == "PAPEL") {
    if (computadorEscolha == "PEDRA") {
      vencedorRodada.innerHTML = " você ganhou a rodada";
      valorpontos++;
    } else if (computadorEscolha == "PAPEL") {
      vencedorRodada.innerHTML = "Essa rodada foi empate";
    } else {
      vencedorRodada.innerHTML = " você perdeu a rodada";
      valorvida--;
    }
  } else if (jogadorEscolha == "TESOURA") {
    if (computadorEscolha == "PEDRA") {
      vencedorRodada.innerHTML = " você perdeu a rodada";
      valorvida--;
    } else if (computadorEscolha == "PAPEL") {
      vencedorRodada.innerHTML = " você ganhou a rodada";
      valorpontos++;
    } else {
      vencedorRodada.innerHTML = "Essa rodada foi empate";
    }
  } else {
    vencedorRodada.innerHTML = "Selecione uma parada, MOVEY";
     document.getElementsByClassName(`tesoura-pc`)[0].style.display = "none"
    document.getElementsByClassName(`pedra-pc`)[0].style.display = "none"
    document.getElementsByClassName(`papel-pc`)[0].style.display = "none"
  }

  if (valorvida == 0 || valorpontos == 3) {
    if (valorvida == 0) {

      vencedorJogo.innerHTML = `GAME OVER, mas vou te dar uma nova chance, mais 3 vidas pra você`;
      mostrarModal = document.getElementsByClassName('modal-vencedor-jogo')[0].style.display = "block"
      document.getElementsByClassName("but-start")[0].style.display = "none"
    } else if (valorpontos == 3) {
      vencedorJogo.innerHTML = `YOU ARE THE CHAMPION, vocÊ fez ${valorpontos} pontos, quero ver ganhar de novo`;
      mostrarModal = document.getElementsByClassName('modal-vencedor-jogo')[0].style.display = "block"
      document.getElementsByClassName("but-start")[0].style.display = "none"
    }
    valorvida = 3;
    valorpontos = 0;
   
  }

  vida.innerHTML = `${valorvida}`;
  pontos.innerHTML = `${valorpontos}`;
  
}

function reset() {
  valorvida = 3;
  vida.innerHTML = `${valorvida}`;
  valorpontos = 0;
  pontos.innerHTML = `${valorpontos}`;
  vencedorRodada.innerHTML = "";
  mostrarModal = document.getElementsByClassName('modal-vencedor-jogo')[0].style.display = "none"
  document.getElementsByClassName("but-start")[0].style.display = "block"
  document.getElementsByClassName(`pedra-pc`)[0].style.display = "none"
  document.getElementsByClassName(`papel-pc`)[0].style.display = "none"
  document.getElementsByClassName(`tesoura-pc`)[0].style.display = "none"

}

function fecharModal(){
  mostrarModal = document.getElementsByClassName('modal-vencedor-jogo')[0].style.display = "none"
  document.getElementsByClassName("but-start")[0].style.display = "block"
}