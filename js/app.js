/*----- constants -----*/
const lookup = {
    1: 'blue',
    '-1': 'yellow'
}

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/

const slotEls = [...document.querySelectorAll('.slot')];
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/

document.querySelector('.gameboard').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/

initialize();

function handleMove(evt) {
    const slotChoice = parseInt(evt.target.id) -1;
    board[slotChoice] = turn;
    getWinner(slotChoice, 1);
    getWinner(slotChoice, 6);
    getWinner(slotChoice, 5);
    getWinner(slotChoice, 7);
    render();
    turn = turn * -1;
}
//below was changed 
function getWinner(idx, inc) {
    let checkIdx = idx;
    let theRow = 0;
    while (board[checkIdx] === turn && checkIdx < board.length){
        theRow++; 
        checkIdx = checkIdx + inc;
    }
    checkIdx = idx - 1;

    while (board[checkIdx] === turn && checkIdx >= 0){
        theRow++; 
        checkIdx = checkIdx - inc

    }
    if (theRow >= 4) {
        winner = turn;
    }; 
}

function render() {
    slotEls.forEach(el => el.style.backgroundColor = 'burlywood');
    renderBoard();

    if ( board.every((element) => {
        element !== null;
    })  && winner !== null ) {

        msgEl.innerHTML = 'No winner. It\'s a draw';
    } else if (winner) {
        msgEl.innerHTML = `${lookup[winner].toUpperCase()} wins!`;
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
    slotEls.forEach(function(slotEl, idx) {
      slotEl.style.backgroundColor = lookup[board[idx]];
    });
   if (winner) {msgEl.innerText = `${winner} WINS!`;}
   else {
       msgEl.innerText = '';
   }
  }
   