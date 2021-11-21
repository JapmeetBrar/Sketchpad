const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');

let numSquares = 64;
let divs;

clearBtn.addEventListener('click', resetGame);

createBoard(numSquares);

function createBoard(squares){
    for (let i = 0; i < numSquares*numSquares; i++) {
        let temp = document.createElement('div');
        temp.className="sketch";
        temp.style.height= 960/numSquares + "px";
        temp.style.width= 960/numSquares + "px";
        temp.classList.add('hover');
        container.appendChild(temp);

        temp.addEventListener("mouseenter", function(e){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            // temp.style.backgroundColor = "#"+ randomColor;
            temp.style.backgroundColor = "black";
        })
    }  
    divs = document.querySelectorAll('.hover');
}


function resetGame(){
    divs.forEach((div)=>{
        container.removeChild(div);
    })
    numSquares = prompt('Enter the number of squares you would like per side');
    // while (numSquares>100){
    //     numSquares =prompt('Please Enter a maxiumum of 100')
    // }
    createBoard(numSquares);
}