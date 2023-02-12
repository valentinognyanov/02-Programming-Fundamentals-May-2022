function reverseInPlace(arr) {
    let s = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let curr = arr[i];
        arr[i] = arr[s - i];
        arr[s - i] = curr;
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);