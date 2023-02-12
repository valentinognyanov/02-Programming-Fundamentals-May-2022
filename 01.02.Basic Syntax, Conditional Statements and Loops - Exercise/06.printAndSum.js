function printAndSum(start, end) {
    let res = "";
    let sum = 0;

    for(let i = start; i <= end; i++) {
        if(i === end) {
            res += `${i}`;
        } else {
            res += `${i} `;
        }
        sum += i;
    }
    console.log(res);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);