import {FLOOR_FORM} from './view.js'

const URLS = {
    floorize: 'https://api.genderize.io',
    nationalize: 'https://api.nationalize.io'
}

function addProperty(prop, output) {
    output.textContent = prop;
    output.classList.add('show');   
}

function removeProperty(output) {
    output.textContent = '';
    output.classList.remove('show');  
}

function requestingUrl(url, name, callback) {
    const requestUrl = `${url}?name=${name}`;
    fetch(requestUrl)
    .then(response => response.json())   
    .then(response => callback(response));       
}

FLOOR_FORM.form.onsubmit = () => {
    sound();
    const name = FLOOR_FORM.name.value; 

    if(name) {
        requestingUrl(URLS.floorize, name, resp => {                 
            const floor =  resp['gender'];                
            const output = FLOOR_FORM.properties[0];           
            if(gender) addProperty(`${name} is ${floor}`, output);                             
            else removeProperty(output);           
        });

        requestingUrl(URLS.nationalize, name, resp => {
            const output = FLOOR_FORM.properties[1];
            try {
                const country = resp['country'][0]['country_id'];
                addProperty(country, output);
            }
            catch {
                removeProperty(output);
            } 
        });
    }   
    FLOOR_FORM.form.reset();
    return false;
}

setInterval(() => {
    FLOOR_FORM.properties.forEach(prop => prop.style.background = '#' + Math.floor(Math.random() * 1000));
}, 500);

function sound() {
    FLOOR_FORM.player.play();
}