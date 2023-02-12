function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < arr.length; i++) {
        let currNum = Number(arr[i]);
        if(currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    let totalSum = evenSum - oddSum;
    console.log(totalSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);