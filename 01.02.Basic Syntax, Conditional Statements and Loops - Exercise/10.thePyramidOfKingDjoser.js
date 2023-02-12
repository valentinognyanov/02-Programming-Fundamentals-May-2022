function thePyramidOfKingDjoser(base, increment) {

    let row = 0;
    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisLazuliCounter = 0;
    let goldCounter = 0;
    let currBase = base;

    while (currBase > 2) {
        let marble = currBase * 4 - 4
        let stone = currBase * currBase - marble;
        stoneCounter += stone;
        row++;
        if (row % 5 === 0) {
            lapisLazuliCounter += marble;
        } else {
            marbleCounter += marble;
        }
        currBase -= 2;
    }
    row++;
    let gold = currBase * currBase;
    let stone = Math.ceil(stoneCounter * increment);
    let marble = Math.ceil(marbleCounter * increment);
    let lapis = Math.ceil(lapisLazuliCounter * increment);
    goldCounter = Math.ceil(gold * increment);
    let totalHeight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${goldCounter}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
thePyramidOfKingDjoser(11, 0.75);