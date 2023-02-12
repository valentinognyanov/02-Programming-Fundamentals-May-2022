function stringGame(data) {
    let initionString = data.shift();
    let line = data.shift();

    while (line !== 'Done') {
        let command = line.split(' ').shift();

        switch (command) {
            case 'Change':
                let char = line.split(' ')[1];
                let replacment = line.split(' ')[2];
                let regex = new RegExp(char, 'g');
                initionString = initionString.replace(regex, replacment);
                console.log(initionString);
                break;
            case 'Includes':
                let substr = line.split(' ')[1];

                if (initionString.includes(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'End':
                let end = line.split(' ')[1];

                if (initionString.endsWith(end)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Uppercase':
                initionString = initionString.toUpperCase();
                console.log(initionString);
                break;
            case 'FindIndex':
                let ind = line.split(' ')[1];
                let indexOf = initionString.indexOf(ind);
                console.log(indexOf);
                break;
            case 'Cut':
                let startInd = Number(line.split(' ')[1]);
                let endInd = Number(line.split(' ')[2]);
                initionString = initionString.slice(startInd, startInd + endInd);
                console.log(initionString);
                break;
        }
        line = data.shift();
    }
}
stringGame([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
]);
console.log('____________________');
stringGame([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);