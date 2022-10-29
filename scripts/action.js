export function action(content, choice) {
    let choiceMade = sessionStorage.getItem('choiceMade');
    const random = sessionStorage.getItem("carItem");

    console.log(choiceMade);

    // Open door
    if (choiceMade == 'undefined') {
        for (let item of content) {
            if (item.id != random && item != choice) {
                item.children[0].src = "../content/images/goat.png";
                sessionStorage.setItem('choiceMade', item.id);
                break;
            }
        }
    }
    else {
        for (let item of content) {
            if (item.id != choiceMade) {
                if (item.id == random) {
                    item.children[0].src = "../content/images/car.png";
                }
                else {
                    item.children[0].src = "../content/images/goat.png";
                }
            } 
        }
        setTimeout(update, 2000);
    }
}

function update() {
    let content = document.getElementsByClassName("door");

    let stateManager = sessionStorage.getItem('stateManager');
    console.log(stateManager);

    sessionStorage.setItem('choiceMade', 'undefined');

    for (let element of content) {
        element.children[0].src = "../content/images/door.png";

        //Generate car
        const random = Math.floor(Math.random() * 3);
        sessionStorage.setItem("carItem", random);
    }

    let numberOfGames = sessionStorage.getItem("numberOfGames");
    numberOfGames++;

    document.getElementsByName("numberOfGames")[0].innerHTML =
        numberOfGames.toString();
    sessionStorage.setItem("numberOfGames", numberOfGames);
}
