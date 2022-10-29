function incrementState(item) {
    sessionStorage.setItem(item, +sessionStorage.getItem(item) + 1);
}

export function action(content, choice) {
    const currentState = sessionStorage.getItem('currentState');

    const random = sessionStorage.getItem("carItem");

    // Open door
    if (currentState == 'undefined') {
        for (let item of content) {
            if (item.id != random && item != choice) {
                item.children[0].src = "../content/images/goat.png";

                sessionStorage.setItem('openedDoor', item.id);
                sessionStorage.setItem('currentState', choice.id);

                break;
            }
        }
    }
    else if (choice.id != sessionStorage.getItem('openedDoor')
            && (currentState == 0 || currentState == 1 || currentState == 2)){

        console.log(choice.id + ' ' + sessionStorage.getItem('openedDoor'));

        for (let item of content) {
            if (true) {
                if (item.id == random) {
                    item.children[0].src = "../content/images/car.png";
                }
                else {
                    item.children[0].src = "../content/images/goat.png";
                }
            }
        }
        
        if (currentState != choice.id) {
            incrementState('doorChangedTotal');

            if (choice.id == random) {
                incrementState('doorChangedSuccess');
            }
            else {
                incrementState('doorChangedUnsuccess');
            }
        }
        else {
            incrementState('doorNotChangedTotal');

            if (choice.id == random) {
                incrementState('doorNotChangedSuccess')
            }
            else {
                incrementState('doorNotChangedUnsuccess');
            }
        }

        sessionStorage.setItem('currentState', 'completed');
        sessionStorage.setItem('openedDoor', 'undefined');
    }
}