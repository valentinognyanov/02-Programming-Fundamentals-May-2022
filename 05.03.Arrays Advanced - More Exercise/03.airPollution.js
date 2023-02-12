function airPollution(map, forces) {
    let mapsOfSofia = map.map(x => x.split(' ').map(Number));

    while (forces.length > 0) {
        let currArr = forces.shift();
        let currForce = currArr.split(' ')[0];
        let currValue = Number(currArr.split(' ')[1]);

        switch (currForce) {
            case 'breeze':
                mapsOfSofia = breeze(mapsOfSofia, currValue);
                break;
            case 'gale':
                mapsOfSofia = gale(mapsOfSofia, currValue);
                break;
            case 'smog':
                mapsOfSofia = smog(mapsOfSofia, currValue);
                break;
            default:
                break;
        }
    }

    function breeze(arr, index) {
        for (let col = 0; col < arr.length; col++) {
            let currParticle = arr[index][col];

            if (currParticle - 15 >= 0) {
                arr[index][col] -= 15;
            } else {
                arr[index][col] = 0;
            }
        }
        return arr;
    }

    function gale(arr, index) {
        for (let row = 0; row < arr.length; row++) {
            let currParticle = arr[row][index];

            if (currParticle - 20 >= 0) {
                arr[row][index] -= 20;
            } else {
                arr[row][index] = 0;
            }
        }
        return arr;
    }

    function smog(arr, value) {
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr.length; col++) {
                arr[row][col] += value;
            }
        }
        return arr;
    }

    let result = 'Polluted areas: ';
    mapsOfSofia.forEach((line, rowIndex) => {
        line.forEach((number, colIndex) => {
            if (number >= 50) {
                return (result += `[${rowIndex}-${colIndex}], `);
            }
        });
    });

    console.log(result === 'Polluted areas: ' ? result = 'No polluted areas' : result.slice(0, -2));
}
airPollution(
    ['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
console.log('__________________');
airPollution(
    ['5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);