sessionStorage.setItem('numberOfGames', 0);
sessionStorage.setItem('choiceMade', 'undefined');

let stateManager = {
    changeChoice: {
        totalTry: 0,
        successTry: 0,
        unsuccessTry: 0,
    },
    notChangeChoice: {
        totalTry: 0,
        successTry: 0,
        unsuccessTry: 0,
    },
}
console.log(stateManager);
sessionStorage.setItem('stateManager', stateManager.changeChoice.successTry);

let numberOfGames = document.getElementsByName('numberOfGames');
numberOfGames[0].innerHTML = '0';

import { load } from "./load.js";

load();