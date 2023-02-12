function palindromeIntegers(arr) {
    for (let el of arr) {
        let currEl = String(el);
        let reversedEl = String(el).split('').reverse().join('');
        if (currEl === reversedEl) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);