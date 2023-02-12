function centuriesToMinutes(centuries) {
    let centuriesToYears = centuries * 100;
    let yearsToDays = Math.trunc(centuriesToYears * 365.2422);
    let daysToHours = yearsToDays * 24;
    let hoursToMinutes = daysToHours * 60;

    console.log(`${centuries} centuries = ${centuriesToYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);
}
centuriesToMinutes(1);