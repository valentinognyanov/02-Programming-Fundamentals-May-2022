function buildAWall(input) {
    let inputToNumbers = input.map(Number);
    let concretePerDay = [];
    let totalConctere = 0;
    let totalSum = 0;
    let workers = inputToNumbers.filter(len => len < 30).length;

    while (workers !== 0) {
        let concreteByAllWorkers = 0;

        for (let i = 0; i < inputToNumbers.length; i++) {
            if (inputToNumbers[i] !== 30) {
                inputToNumbers[i]++;
                concreteByAllWorkers += 195;

                if (inputToNumbers[i] === 30) {
                    workers--;
                }
            }
        }
        totalConctere += concreteByAllWorkers;
        concretePerDay.push(concreteByAllWorkers);
    }
    totalSum = totalConctere * 1900;
    console.log(concretePerDay.join(', '));
    console.log(`${totalSum} pesos`);
}
buildAWall([21, 25, 28]);
console.log('__________');
buildAWall([17]);
console.log('__________');
buildAWall([17, 22, 17, 19, 17]);