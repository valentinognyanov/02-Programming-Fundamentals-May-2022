function sortNumbers(num1, num2, num3) {

    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);
    let middleNum = (num1 + num2 + num3) - (maxNum + minNum);
    
    console.log(maxNum);
    console.log(middleNum);
    console.log(minNum);
}
sortNumbers(2, 1, 3);