



// Buscar los elementos de DOM
// Form
const gameForm = document.querySelector('#game-form');
const labels = document.querySelectorAll('.pick');

// Result section
const winner = document.querySelector('.winner');
const player1Pick = document.querySelector('.player1-pick');
const player2Pick = document.querySelector('.player2-pick');
const player1Img = document.querySelector('.player1-img');
const player2Img = document.querySelector('.player2-img');
// Sections
const selectSection = document.querySelector('.select-section');
const resultSection = document.querySelector('.result-section');

//audio tags
const audioHover = document.querySelector('#audio-hover');
const marioSong = document.querySelector('#mario-song');

// Resaltar la opcion seleccionada
for(let element of labels) {
  element.addEventListener('click', function() {
    for(let label of labels) {
      label.classList.remove('active');
    }
    element.classList.add('active');
  })
}

function iniciarJuego() {
  audioHover.pause();
  audioHover.currentTime = 0;
  audioHover.play();
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
      winner: 'Empate',
      player1Pick: player1,
      player2Pick: player2
    }
  }
}

function printWinner(winnerInfo) {
  selectSection.style.display = 'none';
  resultSection.style.display = 'block';
  winner.innerText = 'ganó ' + winnerInfo.winner;
  player1Pick.innerText = winnerInfo.player1Pick;
  player2Pick.innerText = winnerInfo.player2Pick;
  player1Img.src = 'images/' + winnerInfo.player1Pick + '.png';
  player2Img.src = 'images/' + winnerInfo.player2Pick + '.png';
}
