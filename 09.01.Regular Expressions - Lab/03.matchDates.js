function matchDates(dates) {
    let regex = /\b(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let list = dates[0];
    let validDates = regex.exec(list);
    let result = [];

    while (validDates !== null) {
        let day = validDates.groups['day'];
        let month = validDates.groups['month'];
        let year = validDates.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validDates = regex.exec(list);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log('_____________');
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);