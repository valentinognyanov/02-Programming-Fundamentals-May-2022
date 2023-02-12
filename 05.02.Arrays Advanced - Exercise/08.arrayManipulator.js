function arrayManipulator(nums, commands) {
    let result = [];
    for (let el of commands) {
        let [command, index, element] = el.split(' ');

        switch (command) {
            case 'add':
                nums.splice(index, 0, +element);
                break;
            case 'addMany':
                let currEl = 0;
                let removeFirst = el.split(' ');

                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currEl = removeFirst[i];
                    nums.splice(index, 0, +currEl)
                }
                break;
            case 'contains':
                console.log(nums.indexOf(+index));
                break;
            case 'remove':
                nums.splice(index, 1);
                break;
            case 'shift':
                let position = +index;

                for (let i = 0; i < position; i++) {
                    nums.push(nums.shift());
                }
                break;
            case 'sumPairs':
                let els = nums.reduce(function (total, el, index) {
                    if (index % 2 === 0) {
                        total.push(+nums[index] + (+nums[index + 1] || 0));
                    }
                    return total;
                }, []);
                nums = els;
                break;
            case 'print':
                for (let el of nums) {
                    result.push(el);
                }
                break;
        }
    }
    console.log('[ ' + result.join(', ') + ' ]');
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log('______________');
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
console.log('______________');
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);