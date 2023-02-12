function spiceMustFlow(startSpices) {
    let daysCount = 0;
    let spicesSum = 0;
    while(startSpices >= 100) {
        daysCount++;
        spicesSum += startSpices - 26;
        startSpices -= 10;
    }
    console.log(daysCount);
    if(daysCount !== 0) {
        console.log(spicesSum - 26);
    } else {
        console.log(spicesSum);
    }
}
spiceMustFlow(450);