function oddAndEvenSum(input) {
    let string = String(input);
    let evenSum = 0;;
    let oddSum = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] % 2 != 0) {
            oddSum += Number(string[i]);
        } else if(string[i] % 2 === 0) {
            evenSum += Number(string[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);