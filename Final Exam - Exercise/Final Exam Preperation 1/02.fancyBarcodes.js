function fancyBarcodes(data) {
    let countBarcodes = Number(data.shift());
    let regex = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

    for (let i = 0; i < countBarcodes; i++) {
        let barcode = data[i];
        let match = regex.exec(barcode);
        let concatenateDigits = '';
        let isValid = false;

        while (match !== null) {
            let barcodeText = match[2];
            isValid = true;

            for (let ch of barcodeText) {

                if (!isNaN(Number(ch))) {
                    concatenateDigits += ch;
                }
            }
            match = regex.exec(barcode);
        }
        if (isValid) {
            concatenateDigits = concatenateDigits !== '' ? concatenateDigits : '00';
            console.log(`Product group: ${concatenateDigits}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
console.log('______________');
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);