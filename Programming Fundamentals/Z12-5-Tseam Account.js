function tseamAccount(arr) {

    let petersGames = arr[0].split(" ");
    let index = 1;
    while (arr[index] !== "Play!") {
        let petersActionArray = arr[index].split(" ");
        let petersAction = petersActionArray[0];
        let game = petersActionArray[1];
        if (petersAction == "Install") {
            if (!petersGames.includes(game)) {
              petersGames.push(game);
            }
        }
        if (petersAction == "Uninstall") {
            if (petersGames.includes(game)){
                petersGames = petersGames.filter(function(element) {return element !== game;});
            }
        }
        if (petersAction == "Update"){
            if (petersGames.includes(game)) {
                petersGames = petersGames.filter(function(element) {return element !== game;});
                petersGames.push(game);
            }
        }
        if (petersAction == "Expansion") {
            let gameAsArr = game.split("-");
            let gameWithExpansion = gameAsArr[0];
            let gamePlusTheExpansion = gameAsArr[0] + ":" + gameAsArr[1];

            let i = 0;
            while (i < petersGames.length) {
                if (gameWithExpansion == petersGames[i]) {
                    petersGames.splice(i + 1, 0, gamePlusTheExpansion);
                }
                i++;
            }
            
        }
        index++;
    }
    console.log(petersGames.join(" "));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);