function orbit(arr) {
    let row = arr[0];
    let colomn = arr[1];
    let startRow = arr[2];
    let startColomn = arr[3];

    let result = [];

    for (let i = 0; i < row; i++) {
        result.push([]);
    }

    for (let j = 0; j < row; j++) {
        for (let k = 0; k < colomn; k++) {
            result[j][k] = Math.max(Math.abs(j - startRow), Math.abs(k - startColomn)) + 1;
        }
    }
    console.log(result.map(j => j.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);