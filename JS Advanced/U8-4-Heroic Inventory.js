function heroicInventory(arr) {
    let result = [];
    for (heroInfo of arr) {
        let [hero, level, items] = heroInfo.split(" / ");
        let itemsArr = items.split(", ");
        let heroObj = {
            name: hero,
            level: Number(level),
            items: itemsArr,
        }
        result.push(heroObj);
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 /']);

