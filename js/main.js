console.log('ehllo');
document.addEventListener('DOMContentLoaded', () => {
    // ref h2/ movement
    let movementDisplay = document.getElementById('movement');
    // ref canvas
    let game = document.getElementById('game');


    // Set some canvas configs
    game.setAttribute('height', 400);
    game.setAttribute('width', 800);
    //context, sets it to 2d
    let ctx = game.getContext('2d');


    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }

    drawBox(200, 100, 200, 'red');
    // DRAW A BOX
    // set a fill color
    ctx.fillStyle = '#ffffff'
    // set a line color
    ctx.strokeStyle = 'red';
    // set a line width
    ctx.lineWidth = 5;
    // call the fillRect to draw the filled square
    ctx.fillRect(10, 10, 100, 100);
    // call strokeRect to draw the line rectangle
    ctx.strokeRect(10, 10, 100, 100);




})