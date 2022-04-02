/*----- constants -----*/
const lookup = {
    playerB: 'blue',

    playerY: 'yellow',
    
    noPlayer: 'null'
}

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/

const slotEls = document.querySelectorAll('div.slot');
const message = document.querySelector('h1');

/*----- event listeners -----*/

document.querySelector('div.slot').//addEventListener('click', handleMove);
document.querySelector('button').//addEventListener('click', initialize);
const idx= slotEls.indexOff(evt.target);
if(idx === playerB) return;
console.log(idx);
board[idx] = playerB;
render();

/*----- functions -----*/

initialize();

function handleMove(evt) {

const slotChoice = parseInt(evt.target.id.replace('choice', ''));

//do I have to create a 'changeColor' 

//I think 'slotChoice' will correspond with id number of each slot?
//if all squares have been clicked && no winner?
if(board (|| winner) return; 
// update state (board, turn, winner)
winner = getWinner(); 
render();


function getWinner() {
    
}

function render() {
    slots.forEach(function(el)
            slotEls.forEach(el => el.style.backgroundColor = 'white';//or 'null'

    
    //need 'if' statement to determine winner
    if (/*(all slots 'true'? && winner !== )*/) {

        message.innerHTML = 'No winner. It/s a draw';

    } else if (winner) {
        message.innerHTML = `${lookup[winner].toUpperCase()} wins!`;

    function initialize() {
        board = new Array(42).fill(null);
    
        turn = playerBlue;
        render();
    }
    function renderBoard() {
       board.forEach(function(slot, idx){
            slotEls[idx].style.backgroundColor = lookup[slot];
       }
    }