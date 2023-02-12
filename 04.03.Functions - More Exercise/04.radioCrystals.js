function radioCrystals(arr) {
    let neededThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currThickness = arr[i];

        console.log(`Processing chunk ${currThickness} microns`);

        let cut = (number) => number / 4;
        let lap = (number) => number - number * 0.2;
        let grind = (number) => number - 20;
        let etch = (number) => number - 2;
        let xRay = (number) => number + 1;

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (currThickness !== neededThickness) {
            while (currThickness / 4 >= neededThickness) {
                currThickness = cut(currThickness);
                cutCount++;
            }

            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currThickness = Math.floor(currThickness);
            }

            while (currThickness - currThickness * 0.2 >= neededThickness) {
                currThickness = lap(currThickness);
                lapCount++;
            }

            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currThickness = Math.floor(currThickness);
            }

            while (currThickness - 20 >= neededThickness) {
                currThickness = grind(currThickness);
                grindCount++;
            }

            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currThickness = Math.floor(currThickness);
            }

            while (currThickness - 2 >= neededThickness - 1) {
                currThickness = etch(currThickness);
                etchCount++;
            }

            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currThickness = Math.floor(currThickness);
            }

            if (currThickness < neededThickness) {
                currThickness = xRay(currThickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${neededThickness} microns`);
    }
}
radioCrystals([1375, 50000]);
console.log('________________');
radioCrystals([1000, 4000, 8100]);