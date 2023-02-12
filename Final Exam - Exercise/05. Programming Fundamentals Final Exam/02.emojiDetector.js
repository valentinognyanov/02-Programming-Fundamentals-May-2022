function emojiDetector(string) {
    let text = string.toString();
    let digitRegex = /\d/g;
    let match = digitRegex.exec(text);
    let sum = 1;

    while (match) {
        let n = Number(match);
        sum *= n;
        match = digitRegex.exec(text);
    }
    let emojiRegex = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let emojiMatch = emojiRegex.exec(text);
    let coolEmojies = [];
    let count = 0;

    while (emojiMatch) {
        count++;
        let currEmoji = emojiMatch[2];
        let asciiSum = 0;

        for (let char of currEmoji) {
            let currCharAscii = char.charCodeAt();
            asciiSum += currCharAscii;
        }
        if (asciiSum >= sum) {
            coolEmojies.push(emojiMatch[0]);
        }
        emojiMatch = emojiRegex.exec(text);
    }
    console.log(`Cool threshold: ${sum}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);

    for (let e of coolEmojies) {
        console.log(e);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('____________________');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('____________________');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);