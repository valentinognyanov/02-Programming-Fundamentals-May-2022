function computerStore(input) {
    let index = 0;
    let command = input[index++];
    let totalSum = 0;

    while (command !== 'special' && command !== 'regular') {
        let currPrice = Number(command);

        if (currPrice < 0) {
            console.log("Invalid price!");
            command = input[index++];
            continue;
        }
        totalSum += currPrice;
        command = input[index++];
    }
    let taxes = (totalSum * 1.2) - totalSum;
    let totalSumWithTax = totalSum + taxes;

    if (command === 'special') {
        totalSumWithTax *= 0.9;
    }
    if (totalSum <= 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalSumWithTax.toFixed(2)}$`);
    }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
console.log('___________________');
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
console.log('___________________');
computerStore(['regular']);
