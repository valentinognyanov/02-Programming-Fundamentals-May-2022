function modernTimesOfHashTag(str) {
    let strArr = str.split(' ');

    for (let word of strArr) {

        if (word.startsWith('#') && word.length > 1) {

            let flag = true;
            let wordLower = word.toLowerCase();

            for (let i = 1; i < wordLower.length; i++) {
                if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.substring(1));
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('________________');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');