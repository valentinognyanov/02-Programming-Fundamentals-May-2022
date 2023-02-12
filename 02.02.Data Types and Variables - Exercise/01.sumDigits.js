function sumDigits(num) {
    let sum = 0;
    let numToString = String(num);
    for(let i = 0; i <= numToString.length - 1; i++) {
        sum += Number(numToString[i]);
    }
    console.log(sum);
}
sumDigits(245678);