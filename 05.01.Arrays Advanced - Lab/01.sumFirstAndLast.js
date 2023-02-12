function sumFirstAndLast(arr) {
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop());

    let result = firstNumber + lastNumber;
    console.log(result);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);