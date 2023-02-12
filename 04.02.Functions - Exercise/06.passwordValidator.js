function passwordValidator(password) {

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPassword) {
        for (let el of stringPassword) {
            let currElAscii = el.charCodeAt(0);
            if (!(currElAscii >= 48 && currElAscii <= 57) &&
                !(currElAscii >= 65 && currElAscii <= 90) &&
                !(currElAscii >= 97 && currElAscii <= 122)) {
                return false;
            }
        }
        return true;
    }

    function isHavingAtLeastTwoDigits(stringPassword) {
        let count = 0;

        for (let el of stringPassword) {
            let currElAscii = el.charCodeAt(0);
            if (currElAscii >= 48 && currElAscii <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }
    let isLengthValid = isLengthEnough(password);
    let isOnlyLettersAndDigitsValid = isOnlyLettersAndDigits(password);
    let isHavingAtLeastTwoDigitsValid = isHavingAtLeastTwoDigits(password);

    if (isLengthValid && isOnlyLettersAndDigitsValid && isHavingAtLeastTwoDigitsValid) {
        console.log('Password is valid');
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOnlyLettersAndDigitsValid) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isHavingAtLeastTwoDigitsValid) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('logIn');
console.log('____________________');
passwordValidator('MyPass123');
console.log('____________________');
passwordValidator('Pas%ss2');