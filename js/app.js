/*----- constants -----*/
const lookup = {
    1: 'blue',
    '-1': 'yellow'
}

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/

const slotEls = [...document.querySelectorAll('.slot')];
const message = document.querySelector('h1');

/*----- event listeners -----*/

document.querySelector('.gameboard').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/

initialize();

function handleMove(evt) {
    const slotChoice = parseInt(evt.target.id) -1;
    board[slotChoice] = turn;
    winner = getWinner(); 
    render();
    turn = turn * -1;
}
//below was changed 
function winner(idx, inc) {
    let checkIdx = idx;
    let theRow = 0;
    while (gameBoard[checkIdx] === turn && checkIdx < gameBoard.length){
        theRow++; 
        checkIdx = checkIdx + inc;
    }
    checkIdx = idx - 1;

    while (gameBoard[checkIdx] === turn && checkIdx >= 0){
        theRow++; 
        checkIdx = checkIdx - inc

    }
    if (theRow >= 4) {
        result = turn;
    }; 
}

function render() {
    slotEls.forEach(el => el.style.backgroundColor = 'burlywood');
    renderBoard();

    if ( board.every((element) => {
        element !== null;
    })  && winner !== null ) {

        message.innerHTML = 'No winner. It\'s a draw';
    } else if (winner) {
        message.innerHTML = `${lookup[winner].toUpperCase()} wins!`;
    }
}
function initialize() {
    board = new Array(42).fill(null);
    turn = 1;
    winner = null;
    render();
}

function renderBoard() {
    board.forEach(function(slot, idx) {
        slotEls[idx].style.backgroundColor = lookup[slot];
    });
}
  
  function render() {
    circleEls.forEach(function(circleEl, idx) {
      circleEl.style.backgroundColor = gameBoard[idx];
    });
   if (result) {msgEl.innerText = `${result} WINS!`;}
   else {
       msgEl.innerText = '';
   }
  }
   winner(idx, 1);
    winner(idx, 6);
    winner(idx, 5);
    winner(idx, 7);