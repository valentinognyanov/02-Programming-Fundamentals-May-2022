function arrayRotation(arr, rotation) {
    while(rotation > 0) {
        let element = arr.shift();
        arr.push(element);
        rotation--;
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);