



// Buscar los elementos de DOM
const gameForm = document.querySelector('#game-form');
const winner = document.querySelector('.winner');
const player1Pick = document.querySelector('.player1-pick');
const player2Pick = document.querySelector('.player2-pick');
// Sections
const selectSection = document.querySelector('.select-section');
const resultSection = document.querySelector('.result-section');

function iniciarJuego() {
  const computerSelection = computerPick();
  const playerSelection = gameForm.selection.value; // piedra, papel trijeras
  const winnerInfo = versus(playerSelection, computerSelection);
  printWinner(winnerInfo);
}

function computerPick() {
  const options = ['piedra', 'papel', 'tijeras'];
  let computerSelection = Math.floor(Math.random() * 2.99); //0, 1, 2
  computerSelection = options[computerSelection];
  return computerSelection;
}

function versus(player1, player2) {
  if(player1 === 'papel' && player2 === 'piedra' ||
     player1 === 'piedra' && player2 === 'tijeras' ||
     player1 === 'tijeras' && player2 === 'papel' ){
    return {
      winner: 'player1',
      player1Pick: player1,
      player2Pick: player2
    }
  } else if(player1 === 'papel' && player2 === 'tijeras' ||
            player1 === 'piedra' && player2 === 'papel' ||
            player1 === 'tijeras' && player2 === 'piedra'){
      return {
        winner: 'player2',
        player1Pick: player1,
        player2Pick: player2
      }
  } else {
    return {
      winner: 'none',
      player1Pick: player1,
      player2Pick: player2
    }
  }
}

function printWinner(winnerInfo) {
  selectSection.style.display = 'none';
  resultSection.style.display = 'block';
  winner.innerText = 'ganó ' + winnerInfo.winner;
  player1Pick.innerText = 'player1: ' + winnerInfo.player1Pick;
  player2Pick.innerText = 'player2: ' + winnerInfo.player2Pick;
}
