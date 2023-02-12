function travelTime(input) {
    let result = {};

    for (let line of input) {
        let [country, city, price] = line.split(' > ');
        city = city.charAt(0).toUpperCase() + city.slice(1);

        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }
        if (!result[country].hasOwnProperty(city)) {
            result[country][city] = Number.POSITIVE_INFINITY;
        }
        if (result[country].hasOwnProperty(city)) {
            if (result[country][city] > Number(price)) {
                result[country][city] = Number(price);
            }
        }
    }
    let sortedResult = Object.keys(result).sort((a, b) => {
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    for (let country of sortedResult) {
        let curRes = '';
        curRes += (country + ' -> ');
        let sortedCityByPrice = Object.keys(result[country]).sort((c1, c2) => {
            "use strict";
            return result[country][c1] - result[country][c2];
        });

        for (let el of sortedCityByPrice) {
            curRes += (el + ' -> ');
            curRes += (result[country][el] + ' ');
        }
        console.log(curRes.trim());
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('_______________');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);