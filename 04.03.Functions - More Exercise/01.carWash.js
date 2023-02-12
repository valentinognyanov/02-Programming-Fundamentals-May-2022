function carWash(arr) {
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i];
        if (currCommand === 'soap') {
            value += 10;
        } else if (currCommand === 'water') {
            value *= 1.2;
        } else if (currCommand === 'vacuum cleaner') {
            value *= 1.25;
        } else if (currCommand === 'mud') {
            value *= 0.9;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);