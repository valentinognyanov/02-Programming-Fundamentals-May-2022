function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    for (let i = 0; i < rotations; i++) {
        let curr = arr.pop();
        arr.unshift(curr);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
console.log('_________________');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);