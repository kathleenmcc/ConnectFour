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
function getWinner() {
    let checkIdx = idx;
    let row = 0;
    while (gameboard[checkIdx] === turn) {
        row++
        checkIdx++;
    }
    checkIdx = idx -1;
}
while (gameboard[checkIdx] === turn) {
    row++
    checkIdx--;
}
if (row >= 4) {
    result = turn;
};


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