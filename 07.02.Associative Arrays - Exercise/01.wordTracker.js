function wordTracker(arr) {
    let result = new Map();
    let uniqueWords = arr.shift().split(' ');

    for (let word of uniqueWords) {
        result.set(word, 0);
    }
    for (let word of arr) {
        if (result.has(word)) {
            let oldValue = result.get(word);
            result.set(word, oldValue + 1);
        }
    }
    let sortResult = Array.from(result.entries()).sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA;
    });

    for (let [k, v] of sortResult) {
        console.log(`${k} - ${v}`);
    } 
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('_____________');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);