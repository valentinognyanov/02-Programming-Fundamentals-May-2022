function secretChat(data) {
    let initialMessage = data.shift();
    let line = data.shift();

    while (line !== 'Reveal') {
        let command = line.split(':|:').shift();

        switch (command) {
            case 'InsertSpace':
                let index = Number(line.split(':|:').pop());
                initialMessage = initialMessage.slice(0, index) + ' ' + initialMessage.slice(index);
                console.log(initialMessage);
                break;
            case 'Reverse':
                let substring = line.split(':|:').pop();

                if (initialMessage.includes(substring)) {
                    initialMessage = initialMessage.replace(substring, '');
                    let reversed = "";
                    
                    for (let char of substring) {
                        reversed = char + reversed;
                    }
                    initialMessage += reversed;
                    console.log(initialMessage);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let tokens = line.split(':|:');
                let oldChar = tokens[1];
                let newChar = tokens[2];
                let regex = new RegExp(oldChar, 'g');
                initialMessage = initialMessage.replace(regex, newChar);
                console.log(initialMessage);
                break;
        }
        line = data.shift();
    }
    console.log(`You have a new text message: ${initialMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('______________');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);