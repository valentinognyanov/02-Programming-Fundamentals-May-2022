function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let brokenShieldCounter = 0;
    for(let i = 1; i <= lostFights; i++) {
        if(i % 2 === 0) {
            sum += helmetPrice;
        }
        if(i % 3 === 0) {
            sum += swordPrice;
        }
        if(i % 6 === 0) {
            sum += shieldPrice;
            brokenShieldCounter++;
        }
        if(i % 6 === 0 && brokenShieldCounter % 2 === 0) {
            sum += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);