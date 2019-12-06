let started = false;

//temporary!!
var period = 1000;

function initializeBoard() {
    if(!started){
        started = !started;
        const container = document.querySelector("#container");
        let board = document.createElement("div");
        board.classList.add("board");
        document.body.appendChild(board);

        const nameHolder = document.createElement("div");
        board.appendChild(nameHolder);
        nameHolder.classList.add("displayedName");
    }
}

function changeBoardColor()
{
    const colors = [ 'red', 'green', 'blue', 'yellow', 'black'];
    let amountOfColors = colors.length;
    let boardColorId = Math.floor(Math.random()*amountOfColors);
    let displatedNameId = Math.floor(Math.random()*amountOfColors);
    const board = document.querySelector(".board");
    board.style.backgroundColor = colors[boardColorId];

    let nameHolder = document.querySelector(".displayedName");
    nameHolder.innerHTML = colors[displatedNameId];
}

function beginChangingColors(period) {
    let id = setInterval(changeBoardColor, period);
}


document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {

    const btnEasy = document.querySelector("btnEasy");
    const btnNormal = document.querySelector("btnNormal");
    const btnHard = document.querySelector("btnHard");
    const btnProgrammer = document.querySelector("btnProgrammer");
    const allButtons = document.querySelector(".btn");

    initializeBoard();
    beginChangingColors(period);
    })
})