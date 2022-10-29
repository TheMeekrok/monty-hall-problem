import { action } from './action.js';

export function load() {
    let content = document.getElementsByClassName('door');

    for (let element of content) {
        const door = document.createElement('img');
        door.src = '../content/images/door.png';
    
        door.style.width = door.style.height = '300px';
    
        element.appendChild(door);

        //Generate car
        const random = Math.floor(Math.random() * 3);
        sessionStorage.setItem('carItem', random);

        element.addEventListener("click", () => {
            if (sessionStorage.getItem('currentState') == 'completed') {
                reload();
            }
            else {
                action(content, element);
            }
        });
    }
}

function reload() {
    sessionStorage.setItem('currentState', 'undefined');

    let content = document.getElementsByClassName("door");

    for (let element of content) {
        element.children[0].src = "../content/images/door.png";

        //Generate car
        const random = Math.floor(Math.random() * 3);
        sessionStorage.setItem("carItem", random);
    }

    let numberOfGames = sessionStorage.getItem('numberOfGames');
    numberOfGames++;

    document.getElementById('numberOfGames').innerHTML =
        numberOfGames.toString();

    sessionStorage.setItem('numberOfGames', numberOfGames);

    updateState('doorChangedTotal');
    updateState('doorChangedSuccess');
    updateState('doorChangedUnsuccess');
    updateState('doorNotChangedTotal');
    updateState('doorNotChangedSuccess');
    updateState('doorNotChangedUnsuccess');
}

function updateState(item) {
    document.getElementById(item).innerHTML = sessionStorage.getItem(item);
}
