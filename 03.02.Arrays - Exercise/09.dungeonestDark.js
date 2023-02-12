function dungeonestDark(rooms) {
    let dungeon = rooms[0].split('|');
    let roomsCouner = 0;
    let health = 100;
    let coins = 0;
    let totalCoins = 0;

    for (let i = 0; i < dungeon.length; i++) {
        let currRoom = dungeon[i].split(' ');
        let typeRoom = currRoom[0];
        let num = Number(currRoom[1]);
        roomsCouner++;

        if (typeRoom === "potion") {
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (typeRoom === "chest") {
            coins = Number(num);
            totalCoins += Number(num);
            console.log(`You found ${coins} coins.`);
        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${typeRoom}.`);
            } else {
                console.log(`You died! Killed by ${typeRoom}.`);
                console.log(`Best room: ${roomsCouner}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('_______________________________');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);