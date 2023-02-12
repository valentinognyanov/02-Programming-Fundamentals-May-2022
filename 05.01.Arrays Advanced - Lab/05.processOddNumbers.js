function processOddNumbers(arr) {
    let oddNums = arr.filter((el, i) => i % 2 !== 0);
    let doubled = oddNums.map(x => x * 2);
    let reversed = doubled.reverse();

    console.log(reversed.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);