function equalNeighbors(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i + 1][j]) {
                counter++;
            }
            if (arr[i][j] === arr[i][j - 1]) {
                counter++;
            }
        }
    }

    for (let k = 0; k < arr[arr.length - 1].length; k++) {
        if (arr[arr.length - 1][k] === arr[arr.length - 1][k + 1]) {
            counter++;
        }
    }

    for (let l = 0; l < arr.length - 1; l++) {
        if (arr[l][0] === arr[l + 1][0]) {
            counter++;
        }
    }
    return counter;
}
console.log(equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));
console.log(equalNeighbors(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]));