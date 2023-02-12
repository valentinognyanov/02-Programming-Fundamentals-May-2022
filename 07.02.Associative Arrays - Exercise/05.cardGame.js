function cardGame(input) {
    let players = new Map();
    let enumCardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let enumCardPowerType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    for (let person of input) {
        let [player, cards] = person.split(': ');
        let cardsToArr = cards.split(', ');

        if (!players.has(player)) {
            players.set(player, new Set());
        }
        for (let card of cardsToArr) {
            players.get(player).add(card);
        }
    }
    for (let [k, v] of players) {
        let sum = 0;

        for (let card of v) {
            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');
            let cardPowerAsNum = enumCardPower[cardPower];
            let cardTypeAsNum = enumCardPowerType[cardType];
            sum += cardTypeAsNum * cardPowerAsNum;
        }
        console.log(`${k}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('_____________');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);