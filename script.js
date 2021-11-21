const container = document.querySelector('.container');

const divs = [];

let numSquares = 16;

for (let i = 0; i < numSquares; i++) {
    let temp = document.createElement('div');
    temp.className="sketch";
    temp.textContent=i;
    temp.style.width=960/numSquares;
    temp.style.height=960/numSquares;
    container.appendChild(temp);
}