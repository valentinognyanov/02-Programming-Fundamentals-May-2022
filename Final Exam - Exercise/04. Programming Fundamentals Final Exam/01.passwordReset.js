function passwordReset(data) {
    let initialPass = data.shift();
    let commandParser = {
        'TakeOdd': (initialPass) => {
            return [...initialPass].filter((symbol, index) => { return index % 2 !== 0 }).join('');
        },
        'Cut': (initialPass, index, length) => {
            index = Number(index);
            length = Number(length);
            const substring = initialPass.substr(index, length);
            return initialPass.replace(substring, '');
        },
        'Substitute': (initialPass, substring, substitute) => {
            if (initialPass.includes(substring)) {
                return initialPass.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log('Nothing to replace!');
            return initialPass;
        }
    };
    data.forEach(line => {
        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPass = initialPass;
            initialPass = commandParser[command](initialPass, ...tokens);

            if (oldPass !== initialPass) {
                console.log(initialPass);
            }
        }
    });
    console.log(`Your password is: ${initialPass}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
console.log('____________');
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);