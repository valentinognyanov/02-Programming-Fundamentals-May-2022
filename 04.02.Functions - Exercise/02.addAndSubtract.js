function addAndSubtract(first, second, third) {
    let sum = (a, b) => a + b;
    let subtract = (ab, c) => ab - c;

    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third);

    console.log(finalResult);
}
addAndSubtract(23, 6, 10); // 19
addAndSubtract(1, 17, 30); // -12
addAndSubtract(42, 58, 100); // 0