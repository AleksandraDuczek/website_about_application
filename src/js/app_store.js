import appTapes from '../../assets/data.js';
import { addTapeToStorage } from './app_storage.js';

const section=document.querySelector('.app_store');

const createTitleElement = (name, category) => {
    const cardTitleElement = document.createElement('h1');
    cardTitleElement.textContent = `${name} (${category})`
    return cardTitleElement;
}

const createPoster = (icon) => {
    const image = document.createElement('img');
    image.setAttribute('src', icon);
    image.classList.add('app_poster');
    return image;
}

const createFavoriteButton = (onClickFn) => {
    const button = document.createElement('button')
    button.textContent = "like"
    button.classList.add('like_button')
    button.onclick = onClickFn;
    return button;
  }


const createSize = (size) => {
    const cardSize = document.createElement('p')
    cardSize.textContent = size
    cardSize.classList.add('app_size')
    return cardSize;
}

const appCardElements = appTapes.map(appTape=> {
    const appWrapper = document.createElement('div');
    appWrapper.setAttribute('class', 'app_wrapper'); 
    appWrapper.appendChild(createTitleElement(appTape.name, appTape.category))
    appWrapper.appendChild(createPoster(appTape.icon));
    appWrapper.appendChild(createSize(appTape.size));
    appWrapper.appendChild(createFavoriteButton(
        () => addTapeToStorage(appTape.id)
    ));


    return appWrapper;
});

appCardElements.forEach(element => section.appendChild(element));

console.log(appCardElements);

