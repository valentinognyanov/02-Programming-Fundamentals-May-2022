function sortAnArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArr.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('_______________');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);