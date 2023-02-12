function cookingMasterclass(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);
    let freeFlourPackeges = 0;

    let apronSum = apronPrice * (Math.ceil(students * 1.2));
    let eggsSum = eggPrice * 10 * students;

    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            freeFlourPackeges++;
        }
    }
    let flourSum = flourPrice * (students - freeFlourPackeges);
    let totalSum = apronSum + eggsSum + flourSum;
    let diff = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`Items purchased for ${totalSum.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);
cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);    