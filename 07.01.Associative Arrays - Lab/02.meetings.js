function meetings(arr) {
    let result = {};
    for (let line of arr) {
        let [weekDay, name] = line.split(' ');

        if (result.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            result[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log('________________');
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);