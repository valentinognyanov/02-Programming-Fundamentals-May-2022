function reverseAnArrayOfNumbers(n, arr) {
    let res = [];
    for(let i = n - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    console.log(res.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);