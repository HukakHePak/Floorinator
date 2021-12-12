const FloorForm = document.querySelector('.floorinator');

export const FLOOR_FORM = {
    form: FloorForm.querySelector('.name_in'),
    name: FloorForm.querySelector('[name="name_to_floor"]'),
    results: FloorForm.querySelector('.results'),
    floor: FloorForm.querySelector('.floor'),
    country: FloorForm.querySelector('.country'),
    player: FloorForm.querySelector('audio')
}