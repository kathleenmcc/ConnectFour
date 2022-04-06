/*----- constants -----*/
const lookup = {
    '0': 'white',
    '1': 'blue',
    '-1': 'yellow',
};

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const markerEls = document.querySelectorAll('#markers > div');
const slotEls = [...document.querySelectorAll('.slot')];
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop());
//document.querySelector('.gameboard').addEventListener('click', handleMove);
document.querySelector('.playbtn').addEventListener('click', init);

/*----- functions -----*/

//initialize();
init();

/*function handleMove(evt) {
    const slotChoice = parseInt(evt.target.id) -1;
    board[slotChoice] = turn;
    getWinner(slotChoice, 1);
    getWinner(slotChoice, 6);
    getWinner(slotChoice, 5);
    getWinner(slotChoice, 7);
    render();
    turn = turn * -1;
}*/
function init();{
    board = [
      [0,0,0,0,0,0,0] //column 0
      [0,0,0,0,0,0,0] //column 1
      [0,0,0,0,0,0,0] //column 2
      [0,0,0,0,0,0,0] //column 3
      [0,0,0,0,0,0,0] //column 4
      [0,0,0,0,0,0,0] //column 5
      [0,0,0,0,0,0,0] //column 6
    
    ];
    turn = 1;
    render();
  }

function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if(colIdx === -1) return; //in case click outside of marker triangle
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
  
    render();
  }

renderMarkers();
function renderMarkers() {
    markerEls.forEach(function(markerEl, colIdx) {
      markerEl.style.visibility = board[colIdx].includes(0) ? 'visible' : 'hidden';
    }
                     
                     )
}

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
        checkIdx = checkIdx - inc;
    }
    if (theRow >= 4) {
        winner = turn;
    }
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

/*function initialize() {
    board = new Array(42).fill(null);
    turn = 1;
    winner = null;
    render();
}*/
//Ask Stephanie: how to reset slot colors to 'burlywood' after play again.
//I think I have an extra render function
function renderBoard() {
    board.forEach(function(slot, idx) {
        slotEls[idx].style.backgroundColor = lookup[slot];
    });
}
  
  function render() {
    slotEls.forEach(function(slot, idx) {
      slot.style.backgroundColor = lookup[board[idx]];
    });
   if (winner) {msgEl.innerText = `${winner} wins.`;}
   else {
       msgEl.innerText = '';
   }
  }
