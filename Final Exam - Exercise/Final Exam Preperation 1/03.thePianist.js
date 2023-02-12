function thePianist(data) {
    let n = Number(data.shift());
    let store = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = data.shift().split('|');

        if (!store.hasOwnProperty(piece)) {
            store[piece] = {};
        }
        store[piece][composer] = key;
    }
    let line = data.shift();

    while (line !== 'Stop') {
        let [action, piece, composer, key] = line.split('|');

        switch (action) {
            case 'Add':

                if (store.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    break;
                }
                store[piece] = {};
                store[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                break;
            case 'Remove':

                if (!store[piece]) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                } else {
                    delete store[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
                break;
            case 'ChangeKey':

                if (!store.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }
                let newKey = composer;

                for (let [keyComposer, valueKey] of Object.entries(store[piece])) {
                    store[piece][keyComposer] = newKey;
                }
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                break;
        }
        line = data.shift();
    }
    for (let [piece, composer] of Object.entries(store)) {

        for (let composerKey of Object.keys(store[piece])) {
            console.log(`${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`);
        }
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
console.log('______________');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);