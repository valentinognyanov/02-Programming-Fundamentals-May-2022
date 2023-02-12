function addAndSubtract(arr) {
    let arrSum = 0;
    let newArrSum = 0;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        arrSum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        newArrSum += arr[i];
    }
    console.log(arr);
    console.log(arrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);