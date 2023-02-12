function adAstra(data) {
    let text = data[0];
    let regex = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let match = regex.exec(text);
    let sumCalories = 0;
    let result = [];

    while (match !== null) {
        sumCalories += Number(match.groups['calories']);
        let item = match.groups['item'];
        let date = match.groups['date'];
        let calories = Number(match.groups['calories']);
        let str = item + '|' + date + '|' + calories;
        result.push(str);

        match = regex.exec(text);
    }
    let days = Math.floor(sumCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let line of result) {
        let [item, date, calories] = line.split('|');
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('______________');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('______________');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);