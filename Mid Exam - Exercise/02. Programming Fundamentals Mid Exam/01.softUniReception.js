function softUniReception(input) {
    let firstEmployeeHelpPerHour = Number(input[0]);
    let secondEmployeeHelpPerHour = Number(input[1]);
    let thirdEmployeeHelpPerHour = Number(input[2]);
    let students = Number(input[3]);

    let totalHelpedStudentsPerHour = firstEmployeeHelpPerHour + secondEmployeeHelpPerHour + thirdEmployeeHelpPerHour;
    let totalHours = Math.ceil(students / totalHelpedStudentsPerHour);
    let breaksCount = 0;

    for (let i = 1; i < totalHours; i++) {
        if (i % 3 === 0) {
            breaksCount++;
        }
    }
    let time = totalHours + breaksCount;

    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);