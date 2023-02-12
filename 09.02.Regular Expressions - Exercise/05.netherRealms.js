function netherRealms(data) {
    let splitRegex = /[, ]+/g;
    let demonsNames = data[0].split(splitRegex);
    let demons = {};
    let healthRegex = /[^0-9.\/+*-]/g;
    let demageRegex = /\*|\//g;
    let sumRegex = /[+-]?\d+\.?\d*/g;

    for (let d of demonsNames) {
        let health = 0;
        let demage = 0;

        if (d.match(healthRegex) !== null) {

            for (let symbol of d.match(healthRegex)) {
                health += symbol.charCodeAt();
            }
        }
        let digits = d.match(sumRegex);

        if (digits !== null) {

            for (let digit of digits) {
                demage += Number(digit);
            }
        }
        let equation = d.match(demageRegex);

        if (equation !== null) {

            for (let operator of equation) {

                if (operator === '*') {
                    demage *= 2;
                } else {
                    demage /= 2;
                }
            }
        }
        demons[d] = {};
        demons[d]['health'] = health;
        demons[d]['demage'] = demage;
    }
    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [k, v] of sorted) {
        console.log(`${k} - ${v.health} health, ${v.demage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('______________');
netherRealms('M3ph1st0**, Azazel');
console.log('______________');
netherRealms('Gos/ho');