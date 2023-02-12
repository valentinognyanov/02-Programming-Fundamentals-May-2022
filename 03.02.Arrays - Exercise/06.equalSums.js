function equalSums(arr) {
    let output = 'no';
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        let leftSum = 0;
        let rigthSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arrL; k++) {
            rigthSum += arr[k];
        }
        if (leftSum === rigthSum) {
            output = i;
        }
    }
    console.log(output);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);