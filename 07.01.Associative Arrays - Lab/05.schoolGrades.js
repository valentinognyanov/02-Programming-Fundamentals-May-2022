function schoolGrades(arr) {
    let result = new Map();

    for (let line of arr) {
        let currLine = line.split(' ');
        let name = currLine.shift();
        let setOfGrades = currLine;
        let sum = 0;

        if (!result.has(name)) {
            result.set(name, setOfGrades);
        } else {
            let oldSet = result.get(name);
            for (let grade of setOfGrades) {
                oldSet.push(grade);
            }
            result.set(name, oldSet);
        }
    }
    let sorted = Array.from(result.entries()).sort(([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [k, v] of sorted) {
        let sumGrades = 0;
        for (let grade of v) {
            sumGrades += Number(grade);
        }
        let avg = sumGrades / v.length;
        console.log(`${k}: ${avg.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
console.log('__________');
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);