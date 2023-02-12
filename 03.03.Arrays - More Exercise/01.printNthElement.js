function printNthElement(arr) {
    let res = '';
    let step = Number(arr[arr.length - 1]);
    for(let i = 0; i <= arr.length - 2; i++) {
        if(i === 0 || i % step === 0) {
            res += `${arr[i]} `;
        }
    }
    console.log(res);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
console.log('________________');
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
console.log('________________');
printNthElement(['1', '2', '3', '4', '5', '6']);