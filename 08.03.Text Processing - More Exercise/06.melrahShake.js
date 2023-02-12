function melrahShake(input) {
    let characters = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {
        let firstIndex = characters.indexOf(pattern);
        let lastIndex = characters.lastIndexOf(pattern);

        if (firstIndex !== lastIndex) {
            characters = characters.split('');
            characters.splice(firstIndex, pattern.length);
            characters = characters.join('');
            lastIndex = characters.lastIndexOf(pattern);
            characters = characters.split('');
            characters.splice(lastIndex, pattern.length);
            let removeFromPattern = pattern[Math.floor(pattern.length / 2)];
            pattern = pattern.replace(removeFromPattern, '');
            characters = characters.join('');

            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(characters);
}
melrahShake(['astalavista baby', 'sta']);
console.log('______________');
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);