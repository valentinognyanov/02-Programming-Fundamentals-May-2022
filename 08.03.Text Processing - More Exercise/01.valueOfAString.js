function valueOfAString(input) {
    let sum = 0;
    let lettersArr = input[0].split('');
    let upOrLow = input[1];

    if (upOrLow === 'LOWERCASE') {

        for (let lett of lettersArr) {
            let lettToAscii = Number(lett.charCodeAt());

            if (lettToAscii >= 97 && lettToAscii <= 122) {
                sum += lettToAscii;
            }
        }
    } else if (upOrLow === 'UPPERCASE') {

        for (let lett of lettersArr) {
            let lettToAscii = Number(lett.charCodeAt());

            if (lettToAscii >= 65 && lettToAscii <= 90) {
                sum += lettToAscii;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
console.log('___________');
valueOfAString(['AC/DC', 'UPPERCASE']);