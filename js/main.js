import {FLOOR_FORM} from './view.js'

const URLS = {
    floorize: 'https://api.genderize.io',
    nationalize: 'https://api.nationalize.io'
}

function addProperty(property, element) {
    const newElem = element.cloneNode(true);
    newElem.textContent = property;
    
    if(element.classList.contains('floor')) {
        FLOOR_FORM.results.prepend(newElem);
        setInterval(() => {newElem.style.background = '#' + Math.floor(Math.random() * 1000)}, 500);
        return;
    } 
    FLOOR_FORM.results.append(newElem);
}

function clearList() {
    const list = FLOOR_FORM.results.children;
    while(list.length) 
        list[0].remove();
}

function requestingUrl(url, name, callback) {
    const requestUrl = `${url}?name=${name}`;
    fetch(requestUrl)
    .then(response => response.json())   
    .then(response => callback(response)); 
}

clearList();

FLOOR_FORM.form.onsubmit = () => {
    clearList();
    sound();
    const name = FLOOR_FORM.name.value; 

    if(name) {
        requestingUrl(URLS.floorize, name, resp => {                 
            const floor =  resp['gender'];                     
            if(floor) 
                addProperty(`${name} is ${floor}`, FLOOR_FORM.floor);                                     
        });

        requestingUrl(URLS.nationalize, name, resp => 
            resp['country'].forEach(item => addProperty(item['country_id'], FLOOR_FORM.country))
        );
    }   
    FLOOR_FORM.form.reset();
    return false;
}

function sound() {
    FLOOR_FORM.player.play();
}