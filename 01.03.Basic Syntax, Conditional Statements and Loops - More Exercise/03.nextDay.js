function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let dd = nextDay.getDate();
    let mm = nextDay.getMonth()+1;
    let yyyy = nextDay.getFullYear();

    console.log(yyyy + "-" + mm + "-" + dd);
}
nextDay(2016, 9, 30);
nextDay(2020, 3, 24);