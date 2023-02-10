let gridSize = 10;
let cellNumber = gridSize * gridSize

const gridBox = document.querySelector('.grid-box');

for(let i = 0 ; i < cellNumber ; i++) {
    let num = i + 1;
    let divString = `<div class="cell" style="width: calc(100% / ${gridSize});" >${num}</div>`

    gridBox.innerHTML += divString;
}

const numberOnClick = document.querySelectorAll('.grid-box > .cell')

for(let i = 0 ; i < numberOnClick.length ; i++){
    const cell = numberOnClick[i]
    cell.addEventListener('click', hello);
};

function hello(){
    console.log('ciao');
};
