# Pedra, Papel e Tesoura

Um joquinho proposto como desafio para turma de front-end  Start da Rede Codadã

Chegou a hora de você mostrar suas habilidades com o que você aprendeu nesses últimos dias.
Essa atividade é pra ser realizada em equipe obedecendo os grupos: turma-01, turma-02, turma-03 e turma-04 disponível no canvas.
Siga as regras abaixo para desenvolver sua aplicação e ao final envie um link por cada grupo da sua aplicação no gihubpages ou no Netlify.
Bons codes!

![uma mão fechada, uma mão mostrando um dedo e outra mão mostrando dois dedos, juntamento com uma mensagem indicando a escolha do usuário e a escolha do jogador ](https://cdn.glitch.com/3ea9bd0f-e6f1-41dc-a1a6-69af42818ba4%2F12786655-5b32-40bb-9a28-19bf05774b26.image.png?v=1594514456888)

## O você irá construir?
Jo-Ken-Po é um jogo clássico para dois jogadores. Cada jogador escolhe pedra, papel ou tesoura. Os itens são comparados e qualquer jogador que escolher o item mais poderoso ganha.

Os possíveis resultados são:
- Pedra destrói tesouras.
- Tesoura corta papel.
- Papel embrulha pedra.
- Se houver empate, o jogo termina empatado.

Nosso algoritmo, é dividido em quatro partes:
- O jogador usuário, vai escolher uma opção.
- O computador, vai escolher aleatoriamente uma opção.
- Compare as duas opções e determine um vencedor.
- Inicie o programa e exiba os resultados.

## Esperamos que você:
Desenvolva uma aplicação para que possamos brincar com esse joguinho obedecendo os critérios abaixo:
- Assim que o usuário escolher uma opção deve ser adicionado um estilo para identificar qual foi a escolha do usuário e será mostrado a opção da máquina com uma das seguintes mensagens:
  - Se o usuário escolheu o item mais poderoso retornará a mensage: Parabéns, você ganhou!
  - Se a máquina escolheu o item mais poderoso retornará a mensage: Opss, você perdeu!
  - Se vocês escolheram a mesma oção retornará a mensagem: Eithaa vocês empataram!
- O jogo deve ter um botão "jogar novamente" que quando clicado:
  - Zera os resultados anteriores, 
  - Esconde a opção da máquina 
  - Remove a mensagem dos vencedores
  - Remove o estilo da escolha do jogador

## Importante  
- Lembre-se de aplicar semântica no HTML
- Tente fazer uma aplicação que funcione corretamente tanto no celular quanto no computador
- Use sua criatividade para realizar o designe da sua page

## Bônus
Acreditamos no seu potencial e gostaríamos que você tentasse adicionar um score onde;
- Acumula os vencedores das últimas rodadas, por exemplo: Máquina[2] x Você[1]
- Poderia ter um botão para zerar o score
