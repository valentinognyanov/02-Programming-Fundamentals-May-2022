function gladiatorInventory(commands) {
    let inventory = commands.shift().split(' ');

    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i].split(' ');
        let currItem = currCommand[1];
        currCommand = currCommand[0];

        if (currCommand === 'Buy') {
            if (!inventory.includes(currItem)) {
                inventory.push(currItem);
            }
        } else if (currCommand === 'Trash') {
            if (inventory.includes(currItem)) {
                let index = inventory.indexOf(currItem);
                inventory.splice(index, 1);
            }
        } else if (currCommand === 'Repair') {
            if (inventory.includes(currItem)) {
                let index = inventory.indexOf(currItem);
                inventory.splice(index, 1);
                inventory.push(currItem);
            }
        } else if (currCommand === 'Upgrade') {
            let upgrade = currItem.split('-');
            if (inventory.includes(upgrade[0])) {
                let index = inventory.indexOf(upgrade[0]);
                inventory.splice(index + 1, 0, `${upgrade[0]}:${upgrade[1]}`)
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(
    ['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']);
console.log('__________');
gladiatorInventory(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']);