function searchForANumber(arr, specialArr) {
    let elementsToTake = specialArr[0];
    let deleteCount = specialArr[1];
    let specialDigit = specialArr[2];
    let counter = 0;

    let newArr = arr.slice(0, elementsToTake);
    newArr.splice(0, deleteCount);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === specialDigit) {
            counter++;
        }
    }
    console.log(`Number ${specialDigit} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('__________');
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);