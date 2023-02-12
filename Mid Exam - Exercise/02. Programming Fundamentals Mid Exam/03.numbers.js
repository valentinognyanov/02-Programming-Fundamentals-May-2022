function numbers(input) {
    let arr = input.split(' ').map(Number);
    let sum = 0;

    for (let el of arr) {
        sum += el;
    }
    let avg = sum / arr.length;
    let greaterArr = [];

    for (let el of arr) {
        if (el > avg) {
            greaterArr.push(el);
        }
    }
    greaterArr = greaterArr.sort((a, b) => b - a);
    if (greaterArr.length === 0) {
        console.log('No');
    } else {
        console.log(greaterArr.slice(0, 5).join(' '));
    }
}
numbers(['10 20 30 40 50']);
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51']);
numbers(['1']);
numbers(['-1 -2 -3 -4 -5 -6']);