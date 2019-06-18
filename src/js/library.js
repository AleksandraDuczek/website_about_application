import {getTapesFromStorage, removeTapesFromStorage} from  './app_storage.js';

const list = document.querySelector('.library');

const buildLibrary = () => {
    const favoriteTapes = getTapesFromStorage();

    const listItemElements = favoriteTapes.map(tape => {
        const listItem = document.createElement('li');
        listItem.classList.add("fav_item");
        const name = document.createElement('p');
        name.textContent = tape.name;
            const button = document.createElement('button')
            button.classList.add('dislike_button')
            button.onclick = () => {
            removeTapesFromStorage(tape.id);
            while (list.firstChild){
                list.removeChild(list.firstChild);
            }
            buildLibrary();
            };

        listItem.appendChild(name);
        listItem.appendChild(button);
        return listItem;
    })

    listItemElements.forEach(item => {
        list.appendChild(item);
    })
}


buildLibrary();
