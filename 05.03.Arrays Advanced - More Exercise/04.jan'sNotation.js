function jansNotation(input) {
    let savedNums = [];

    for (let i = 0; i < input.length; i++) {
        if (Number(input[i])) {
            savedNums.push(input[i]);
        } else {
            doMath(savedNums, input[i]);
        }
    }
    if (savedNums.length >= 2) {
        console.log('Error: too many operands!');
    } else if (savedNums.length === 1) {
        console.log(savedNums.toString());
    }

    function doMath(nums, operators) {
        if (nums.length === 1) {
            console.log('Error: not enough operands!');
        }
        switch (operators) {
            case '+':
                nums[nums.length - 2] = nums[nums.length - 2] + nums[nums.length - 1];
                nums.splice(-1, 1);
                break;
            case '-':
                nums[nums.length - 2] = nums[nums.length - 2] - nums[nums.length - 1];
                nums.splice(-1, 1);
                break;
            case '*':
                nums[nums.length - 2] = nums[nums.length - 2] * nums[nums.length - 1];
                nums.splice(-1, 1);
                break;
            case '/':
                nums[nums.length - 2] = nums[nums.length - 2] / nums[nums.length - 1];
                nums.splice(-1, 1);
                break;
        }
    }
}
jansNotation([3, 4, '+']);
console.log('______________');
jansNotation([5, 3, 4, '*', '-']);
console.log('______________');
jansNotation([7, 33, 8, '-']);
console.log('______________');
jansNotation([15, '/']);