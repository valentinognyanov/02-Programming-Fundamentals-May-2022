function magicMatrices(arr) {
    const reduce = (prev, curr) => prev + curr;
    let sum = arr[0].reduce(reduce);

    for (let i = 0; i < arr.length; i++) {
        let rowSum = arr[i].reduce(reduce);
        if (rowSum !== sum) {
            return false;
        }
        if (i === 0) {
            for (let j = 0; j < arr[i].length; j++) {
                let colSum = 0;
                for (let k = 0; k < arr.length; k++) {
                    colSum += arr[j][k];
                }
                if (colSum !== sum) {
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));