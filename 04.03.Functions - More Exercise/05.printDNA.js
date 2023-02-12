function printDNA(num) {
    let symbols = 'ATCGTTAGGG';
    let counter = 0;

    for (let i = 0; i < num; i++) {
        if (i % 4 === 0) {
            console.log(`**${symbols[counter % 10]}${symbols[(counter % 10) + 1]}**`);
        } else if (i % 4 === 1) {
            console.log(`*${symbols[counter % 10]}--${symbols[(counter % 10) + 1]}*`);
        } else if (i % 4 === 2) {
            console.log(`${symbols[counter % 10]}----${symbols[(counter % 10) + 1]}`);
        } else if (i % 4 === 3) {
            console.log(`*${symbols[counter % 10]}--${symbols[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}
printDNA(4);
console.log('____________________');
printDNA(10);