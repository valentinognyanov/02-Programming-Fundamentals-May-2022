function deserializeString(input) {
    let index = 0;
    let command = input[index++];
    let resArr = [];

    while (command !== 'end') {
        let currLine = command;
        let [symbol, indexes] = currLine.split(':');
        let indexesArr = indexes.split('/');

        for (let i of indexesArr) {
            let ind = Number(i);
            resArr[ind] = symbol;
        }
        command = input[index++];
    }
    console.log(resArr.join(''));
}
deserializeString([
    'a:0/2/4/6',
    'b:1/3/5',
    'end'
]);
console.log('__________');
deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);