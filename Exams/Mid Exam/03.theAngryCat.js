function theAngryCat(priceRatings, entryPoint, cheapOrExpensive) {
    let entry = priceRatings[entryPoint];
    let leftDamage = 0;
    let rightDamage = 0;

    switch (cheapOrExpensive) {
        case 'cheap':
            for (let i = entryPoint + 1; i < priceRatings.length; i++) {
                if (entry > priceRatings[i]) {
                    rightDamage += priceRatings[i];
                }
            }
            for (let j = entryPoint - 1; j >= 0; j--) {
                if (entry > priceRatings[j]) {
                    leftDamage += priceRatings[j];
                }
            }
            break;
        case 'expensive':
            for (let k = entryPoint + 1; k < priceRatings.length; k++) {
                if (entry <= priceRatings[k]) {
                    rightDamage += priceRatings[k];
                }
            }
            for (let l = entryPoint - 1; l >= 0; l--) {
                if (entry <= priceRatings[l]) {
                    leftDamage += priceRatings[l];
                }
            }
            break;
    }
    if (leftDamage > rightDamage || leftDamage === rightDamage) {
        console.log(`Left - ${leftDamage}`);
    } else {
        console.log(`Right - ${rightDamage}`);
    }
}
theAngryCat([1, 5, 1], 1, "cheap");
console.log('__________');
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
console.log('__________');
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
