function theImitationGame(data) {
    let encryptedMessage = data.shift();
    let line = data.shift();

    while (line !== 'Decode') {
        let tokens = line.split('|');

        switch (tokens[0]) {
            case 'Move':
                let n = Number(tokens[1]);
                encryptedMessage = encryptedMessage.slice(n) + encryptedMessage.slice(0, n);
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let character = tokens[2];
                encryptedMessage = encryptedMessage.slice(0, index) + character + encryptedMessage.slice(index);
                break;
            case 'ChangeAll':
                let subString = tokens[1];
                let replacment = tokens[2];
                let result = '';

                for (let el of encryptedMessage) {

                    if (el !== subString) {
                        result += el;
                    } else {
                        result += replacment;
                    }
                }
                encryptedMessage = result;
                break;
        }
        line = data.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('__________');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);