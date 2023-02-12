function softUniBarIncome(input) {
    let text = input.join(' ');
    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
    let totalSum = 0;
    let valid;

    while ((valid = regex.exec(text)) !== null) {
        let currPrice = valid.groups.quantity * valid.groups.price;
        console.log(`${valid.groups.name}: ${valid.groups.product} - ${currPrice.toFixed(2)}`);
        totalSum += currPrice;

    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('____________');
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);