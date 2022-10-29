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
            action(content, element);
        });
    }
}


