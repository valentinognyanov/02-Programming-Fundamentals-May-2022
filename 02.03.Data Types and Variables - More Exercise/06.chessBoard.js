function chessBoard(size) {
    let currColour = 'black';
    let previousColour = '';
    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>');

        for (let col = 1; col <= size; col++) {
            console.log(`    <span class="${currColour}"></span>`);
            previousColour = currColour;
            currColour = previousColour === 'black' ? 'white' : 'black';
        }

        console.log('  </div>');
        if (size % 2 === 0) {
            previousColour = currColour;
            currColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}
chessBoard(3);