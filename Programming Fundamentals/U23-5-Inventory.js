function inventory(arr) {
    let objArr = [];
    for (element of arr) {
        let [heroName, heroLevel, heroItems] = element.split(" / ");
        let obj = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems,
        }
        objArr.push(obj);
    }
    objArr.sort((a, b) => a.level - b.level);
    for (objobj of objArr) {
        console.log(`Hero: ${objobj.name}`);
        console.log(`level => ${objobj.level}`);
        console.log(`items => ${objobj.items}`);
    }

}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);