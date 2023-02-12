function matchFullName(names) {
    let regex = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g
    let validNames = regex.exec(names);
    let result = [];

    while (validNames !== null) {
        result.push(validNames[0]);
        validNames = regex.exec(names);
    }
    console.log(result.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");