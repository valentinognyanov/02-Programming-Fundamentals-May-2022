function maxNumber(arr) {
    let newArr = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let firstNum = arr[i];
        let isBiggest = true;

        for (let j = i + 1; j < arrL; j++) {
            let secondNum = arr[j];
            if (firstNum <= secondNum) {
                isBiggest = false;
            }
        }
        if (isBiggest) {
            newArr.push(firstNum);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);