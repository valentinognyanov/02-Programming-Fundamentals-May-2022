function companyUsers(input) {
    let result = [];
    let myObj = input.map(x => {
        let obj = {};
        let [company, id] = x.split(' -> ');
        obj.company = company;
        obj.id = id;
        result.push(obj);
    });
    let newObj = {};

    for (let i = 0; i < result.length; i++) {
        let key = result[i].company;
        let value = result[i].id;

        if (key in newObj) {
            if (!newObj[key].includes(value)) {
                newObj[key].push(value);
            }
        } else {
            newObj[key] = [value];
        }
    }
    let sortedResult = Object.keys(newObj).sort().reduce((obj, key) => {
        obj[key] = newObj[key];
        return obj;
    }, {}
    );

    for (let key in sortedResult) {

        if (sortedResult[key].length > 1) {
            console.log(key);
            console.log(`-- ${sortedResult[key].join('\n-- ')}`);
        } else {
            console.log(key);
            console.log(`-- ${sortedResult[key]}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log('________________');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);