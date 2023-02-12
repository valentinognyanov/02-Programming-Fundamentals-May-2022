function activationKeys(data) {
    let activationKey = data.shift();
    let line = data.shift();

    while (line !== 'Generate') {
        let command = line.split('>>>').shift();

        switch (command) {
            case 'Contains':
                let substring = line.split('>>>')[1];

                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let upOrLow = line.split('>>>')[1];
                let startInd = Number(line.split('>>>')[2]);
                let endInd = Number(line.split('>>>')[3]);

                if (upOrLow === 'Upper') {
                    let slicedPart = activationKey.slice(startInd, endInd);
                    slicedPart = slicedPart.toUpperCase();
                    activationKey = activationKey.slice(0, startInd) + slicedPart + activationKey.slice(endInd);
                    console.log(activationKey);
                } else if (upOrLow === 'Lower') {
                    let slicedPart = activationKey.slice(startInd, endInd);
                    slicedPart = slicedPart.toLowerCase();
                    activationKey = activationKey.slice(0, startInd) + slicedPart + activationKey.slice(endInd);
                    console.log(activationKey);
                }
                break;
            case 'Slice':
                let startIndex = Number(line.split('>>>')[1]);
                let endIndex = Number(line.split('>>>')[2]);
                activationKey = activationKey.slice(0, startIndex) + activationKey.slice(endIndex);
                console.log(activationKey);
                break;
        }
        line = data.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
console.log('________________');
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
