let colors = ['red', 'green', 'blue', 'orange', 'purple', 'black', 'yellow', 'pink'];

let button = document.getElementById('clickme');

button.addEventListener('click', function() {
    let index = parseInt((Math.random()*colors.length)+1);
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${colors[index]}`;
})