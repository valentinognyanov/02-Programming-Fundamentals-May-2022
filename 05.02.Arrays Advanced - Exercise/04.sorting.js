function sorting(arr) {
    let newArr = arr.map(Number).sort(function (a, b) {
        return a - b;
    });

    let copy = newArr.slice(0);
    let result = [];

    for (let i = 0; i < newArr.length; i++) {
        result.push(copy[copy.length - 1]);
        if (result.length === newArr.length) {
            break;
        }
        result.push(copy[0]);

        if (result.length === newArr.length) {
            break;
        }
        copy.shift();
        copy.pop();
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);