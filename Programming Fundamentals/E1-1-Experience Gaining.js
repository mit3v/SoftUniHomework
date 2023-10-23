function experienceGaning(arr) {
    // let arr = [500, 5, 50, 100, 200, 100, 30];
    let neededExperience = Number(arr.shift());
    let countOfBattles = Number(arr[0]);
    let gainedExperience = 0;
    for (i = 1; i <= countOfBattles; i++) {
        gainedExperience += arr[i];
        if (i % 3 == 0) {
            gainedExperience += 0.15 * arr[i];
        }
        if (i % 5 == 0) {
            gainedExperience -= 0.1 * arr[i];
        }
        if (i % 15 == 0) {
            gainedExperience += 0.05 * arr[i];
        }
        if (gainedExperience >= neededExperience) {
            return console.log(`Player successfully collected his needed experience for ${i} battles.`);
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededExperience - gainedExperience).toFixed(2)} more needed.`);
}
// experienceGaning();
experienceGaning([500, 5, 50, 100, 200, 100, 30]);
experienceGaning([400, 5, 50, 100, 200, 100, 20]);