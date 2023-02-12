function legendaryFarming(str = '') {
    let input = str.toLowerCase().split(' ');
    let legendaryItems = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};
    let isBroken = false;

    while (!isBroken && input.length > 0) {
        let quantity = +input.shift();
        let material = input.shift();

        switch (material) {
            case 'shards':
                legendaryItems[material] += quantity;

                if (legendaryItems[material] >= 250) {
                    console.log('Shadowmourne obtained!');
                    legendaryItems[material] -= 250;
                    isBroken = true;
                }
                break;
            case 'fragments':
                legendaryItems[material] += quantity;
                if (legendaryItems[material] >= 250) {
                    console.log('Valanyr obtained!');
                    legendaryItems[material] -= 250;
                    isBroken = true;
                }
                break;
            case 'motes':
                legendaryItems[material] += quantity;
                if (legendaryItems[material] >= 250) {
                    console.log('Dragonwrath obtained!');
                    legendaryItems[material] -= 250;
                    isBroken = true;
                }
                break;
            default:

                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }
                junk[material] += quantity;
                break;
        }
    }
    let legend = Object.entries(legendaryItems)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });

    let junkItems = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('________________');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');