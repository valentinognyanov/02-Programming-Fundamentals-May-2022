function requiredReading(totalPages, pagesForOneHour, timeForReadingTheBook) {
    let totalTimeForWholeBook = totalPages / pagesForOneHour;
    let hoursPerDay = totalTimeForWholeBook / timeForReadingTheBook;
    console.log(hoursPerDay);
}
requiredReading(212, 20, 2);