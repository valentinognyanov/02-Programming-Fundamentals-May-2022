function coffeeLover(input) {
    let coffeList = input.shift().split(' ');
    let commands = Number(input[0]);
    let result = [];
    let flag = false;

    for (let i = 1; i <= commands; i++) {
        let currCommand = input[i].split(' ');
        let com = currCommand[0];

        switch (com) {
            case 'Include':
                let includeCoffee = currCommand[1];
                coffeList.push(includeCoffee);
                break;
            case 'Remove':
                let firstOrLast = currCommand[1];
                let numberOfCoffees = Number(currCommand[2]);

                if (numberOfCoffees > coffeList.length - 1) {
                    continue;
                }
                if (firstOrLast === 'first') {
                    coffeList.splice(0, numberOfCoffees);
                } else if (firstOrLast === 'last') {
                    coffeList.splice(-numberOfCoffees);
                }
                break;
            case 'Prefer':
                let index1 = Number(currCommand[1]);
                let index2 = Number(currCommand[2]);

                if (index1 > coffeList.length - 1 || index2 > coffeList.length - 1) {
                    continue;
                }
                let a = coffeList[index1];
                let b = coffeList[index2];
                coffeList[index1] = b;
                coffeList[index2] = a;
                break;
            case 'Reverse':
                for (let j = coffeList.length - 1; j >= 0; j--) {
                    result.push(coffeList[j]);
                    flag = true;
                }
                break;
        }
    }
    console.log('Coffees:');
    if (flag) {
        console.log(result.join(' '));
    } else {
        console.log(coffeList.join(' '));
    }
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);
console.log('________________');
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"]);
console.log('_________________');
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"]);