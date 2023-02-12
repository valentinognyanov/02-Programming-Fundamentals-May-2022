function mergeArrays(arr1, arr2) {
    let newArr = [];
    let arrL = arr1.length;

    for (let i = 0; i < arrL; i++) {
        if (i % 2 === 0) {
            newArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            newArr[i] = arr1[i] + arr2[i];
        }
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);