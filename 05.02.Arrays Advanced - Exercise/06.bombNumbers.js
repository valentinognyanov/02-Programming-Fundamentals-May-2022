function bombNumbers(nums, bombNums) {
    let bomb = bombNums[0];
    let bombPower = bombNums[1];

    while (nums.includes(bomb)) {
        let index = nums.indexOf(bomb);
        let removeDigits = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if (startIndex < 0) {
            removeDigits += startIndex;
            startIndex = 0;
        }
        nums.splice(startIndex, removeDigits);
    }
    console.log(nums.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log('_______________');
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log('_______________');
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
console.log('_______________');
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);