function substring(str, start, count) {
    let endIndex = start + count;
    console.log(str.substring(start, endIndex));
}
substring('ASentence', 1, 8);
console.log('__________');
substring('SkipWord', 4, 7);