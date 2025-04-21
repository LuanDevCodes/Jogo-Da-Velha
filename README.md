# Jogo da Velha em JavaScript

Projeto desenvolvido durante meu curso de JavaScript, representando meu projeto mais complexo até o momento, onde pude aplicar diversos conceitos aprendidos.

## Desafios Enfrentados

### 🚨 Jogadas Fantasmas
- Problema: O jogo continuava aceitando jogadas mesmo após o término da partida.
- Solução: Implementei um sistema de controle de estado com "jogoAtivo" e verificações adicionais.

### 🤖 Comportamento da IA
- A "IA" foi implementada com jogadas aleatórias.
- Bug crítico: Em alguns casos, a IA somava múltiplos pontos numa única jogada.
- Causa: Chamadas redundantes à verificação de vitória e condições de corrida (quando um jogador e a IA jogavam quase simultaneamente).
- Correção: 

  "if (jogoAtivo == false) {
      return;
  }

  jogoAtivo = false;"

Foi uma jornada complicada aonde apliquei vários dos conhecimentos que pude adquirir ao longo do curso mas que com certeza me ajudaram bastante a visualizar como estruturar um código em JS, HTML e CSS, 
além de poder trabalhar na parte do debug dele e evitar erros futuros.
