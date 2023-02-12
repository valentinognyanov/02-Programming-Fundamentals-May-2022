function pascalCaseSplitter(str) {
    let result = [];
    let index = 1;
    let end = str.length;
    let cut = 0;

    while (index < end) {

        if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
            result.push(str.slice(cut, str.length));
            cut = index;
        }
        index++;
    }
    result.push(str.slice(cut, str.length));

    for (let i = 1; i < result.length; i++) {
        result[i - 1] = result[i - 1].replace(result[i], '');
    }
    console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('_____________');
pascalCaseSplitter('HoldTheDoor');
console.log('_____________');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');