import {FLOOR_FORM} from './view.js'

const URLS = {
    floorize: 'https://api.genderize.io',
    nationalize: 'https://api.nationalize.io'
}

function addProperty(prop, output) {
    output.textContent = prop;
    output.classList.add('show');   
    console.log(prop); 
    setInterval(() => {
        output.style.background = '#' + Math.floor(Math.random() * 1000);
    }, 500);
}


FLOOR_FORM.form.onsubmit = () => {
    const name = FLOOR_FORM.name.value;

      if(name) {
        const floorUrl = `${URLS.floorize}?name=${name}`;
        fetch(floorUrl).then(resp => resp.json())
                  .then(resp => addProperty(resp['gender'], FLOOR_FORM.properties[0]))
        
        const nationUrl = `${URLS.nationalize}?name=${name}`
        fetch(nationUrl).then(resp => resp.json())
                  .then(resp => addProperty(resp['country'][0]['country_id'], FLOOR_FORM.properties[1]))
                  
        FLOOR_FORM.form.reset();
      }   
    return false;
}