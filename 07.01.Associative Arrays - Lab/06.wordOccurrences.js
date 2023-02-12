function wordOccurrences(arr) {
    let occurrences = new Map();

    for (let word of arr) {
        occurrences.set(word, 0);
    }
    for (let word of arr) {
        let oldValue = occurrences.get(word);
        occurrences.set(word, oldValue + 1);
    }
    let sortetOccurrences = Array.from(occurrences).sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA;
    });

    for (let [k, v] of sortetOccurrences) {
        console.log(`${k} -> ${v} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('______________');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);