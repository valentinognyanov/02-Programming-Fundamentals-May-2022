function passwordGenerator(input) {
    let firstStr = input[0];
    let secondStr = input[1];
    let word = input[2].toUpperCase();
    let result = '';
    let ind = 0;

    for (let i = 0; i < firstStr.length; i++) {

        if (firstStr[i] === 'a' || firstStr[i] === 'e' || firstStr[i] === 'o' || firstStr[i] === 'i' || firstStr[i] === 'u') {
            result += `${word[ind++]}`;
        } else {
            result += `${firstStr[i]}`;
        }
        if (ind >= word.length) {
            ind = 0;
        }
    }
    for (let j = 0; j < secondStr.length; j++) {

        if (secondStr[j] === 'a' || secondStr[j] === 'e' || secondStr[j] === 'o' || secondStr[j] === 'i' || secondStr[j] === 'u') {
            result += `${word[ind++]}`;
        } else {
            result += `${secondStr[j]}`;
        }
        if (ind >= word.length) {
            ind = 0;
        }
    }
    result = result.split('');
    console.log(`Your generated password is ${result.reverse().join('')}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
console.log('_____________');
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
console.log('_____________');
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);