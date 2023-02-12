function oddOccurrences(input) {
    let result = new Map();
    let arr = input.split(' ');

    for (let element of arr) {
        let currElLowerCase = element.toLowerCase();
        if (result.has(currElLowerCase)) {
            let oldValue = result.get(currElLowerCase);
            result.set(currElLowerCase, oldValue + 1);
        } else {
            result.set(currElLowerCase, 1);
        }

    }
    let filteredResult = Array.from(result).filter(([key, val]) => {
        return val % 2 !== 0;
    });

    let buff = '';

    for (let [k, v] of filteredResult) {
        buff += k + ' ';
    }
    console.log(buff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('______________');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');