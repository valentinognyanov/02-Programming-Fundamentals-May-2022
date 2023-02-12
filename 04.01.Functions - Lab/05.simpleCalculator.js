function simpleCalculator(firstNum, secondNum, operator) {
    switch (operator) {
        case 'multiply': console.log(firstNum * secondNum); break;
        case 'divide': console.log(firstNum / secondNum); break;
        case 'add': console.log(firstNum + secondNum); break;
        case 'subtract': console.log(firstNum - secondNum); break;
    }
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');