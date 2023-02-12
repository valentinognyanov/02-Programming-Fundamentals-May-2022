function binaryToDecimal(binaryNum) {
    let binaryNumToString = '' + binaryNum;
    let decimal = parseInt(binaryNumToString, 2);
    console.log(decimal);
}
binaryToDecimal(11110000);