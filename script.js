const core = document.querySelector('main');
function etch(power){
    core.style.cssText = `grid-template-columns: repeat(${power}, 1fr);`
    for (i = 0; i < (power ** 2); i++) {
        const square = document.createElement('section');
        core.appendChild(square);
    }
}
etch(16)
const squares = document.querySelectorAll('section');
function activate(act) {
    act.classList.add('active')
}
function redo() {
    let newGrid = prompt('How many squares in each row? Note: maximum of 100 per row')
    if (newGrid === null || undefined || '') {
        return;
    } else {
        removeAllChildNodes(core)
        if (newGrid < 1) {
            etch(1);
        } else if (newGrid > 100) {
            etch(100);
        } else {
            etch(newGrid);
        }
    }
    const newSquares = document.querySelectorAll('section');
    newSquares.forEach((gridUnit) => {
        gridUnit.addEventListener('mouseenter', () => activate(gridUnit));
        gridUnit.addEventListener('touchmove', () => activate(gridUnit));
        }
    );
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
squares.forEach((gridUnit) => {
    gridUnit.addEventListener('mouseenter', () => activate(gridUnit));
    gridUnit.addEventListener('touchmove', () => activate(gridUnit));
}
);