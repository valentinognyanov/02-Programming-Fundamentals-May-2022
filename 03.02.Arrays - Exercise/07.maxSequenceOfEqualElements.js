function maxSequenceOfEqualElements(arr) {
    let maxSequence = [];
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        let currSequence = [];
        for (let j = i; j < arrL; j++) {
            if (arr[i] === arr[j]) {
                currSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if (currSequence.length > maxSequence.length) {
            maxSequence = currSequence;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);