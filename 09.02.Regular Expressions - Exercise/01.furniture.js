function furniture(input) {
    let text = input.join(' ');
    let regex = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let furnitureArr = [];
    let totalSum = 0;
    let valid;

    while ((valid = regex.exec(text)) !== null) {
        let validNames = valid.groups['furniture'];
        let validPrice = valid.groups['price'];
        let validQuantity = valid.groups['quantity'];

        furnitureArr.push(validNames);
        totalSum += Number(validPrice) * Number(validQuantity);
    }
    console.log("Bought furniture:");
    furnitureArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log('_______________');
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
console.log('_______________');
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);