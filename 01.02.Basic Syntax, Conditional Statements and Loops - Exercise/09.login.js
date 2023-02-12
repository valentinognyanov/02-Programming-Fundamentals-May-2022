function login(input) {
    let index = 0;
    let username = input[index++];
    let password = username.split('').reverse().join('');
    let counter = 0;

    while (input[index] !== password) {

        let currLogin = input[index++];
        counter++;
        if (currLogin !== password && counter < 4) {
            console.log('Incorrect password. Try again.');
        }
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
    }

    if (input[index] === password) {
        console.log(`User ${username} logged in.`);
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);