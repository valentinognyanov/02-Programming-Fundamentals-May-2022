function charactersInRange(firstChar, secondChar) {
    let result = [];
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    
    for(let i = startChar + 1; i < endChar; i++) {
       let currChar = String.fromCharCode(i);
       result.push(currChar);
    }
    console.log(result.join(' '));
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');