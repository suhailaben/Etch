const core = document.querySelector('main');
function etch(power){
    for (i = 0; i < (power ** 2); i++) {
        const square = document.createElement('section');
        core.appendChild(square);
    }
}

etch(16)

const squares = document.querySelectorAll('section');
console.log(squares);

squares.forEach((bunny) => {
        bunny.addEventListener('mouseover', () => activate(bunny));
    }
);



function activate(act) {
    
    act.classList.add('active')
}
