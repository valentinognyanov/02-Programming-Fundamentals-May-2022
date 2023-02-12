function mirrorWords(text) {
    text = text.join('');
    let regex = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let match = regex.exec(text);
    let result = [];
    let count = 0;

    while (match) {
        count++;
        let first = match.groups['first'];
        let second = match.groups['second'];
        let reversed = '';

        for (let char of first) {
            reversed = char + reversed;
        }
        if (second === reversed) {
            result.push(first + " <=> " + second);

        }
        match = regex.exec(text);
    }
    if (count === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${count} word pairs found!`);
    }
    if (result.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('____________');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('____________');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);