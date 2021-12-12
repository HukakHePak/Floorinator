const FloorForm = document.querySelector('.floorinator');

export const FLOOR_FORM = {
    form: FloorForm.querySelector('.name_in'),
    name: FloorForm.querySelector('[name="name_to_floor"]'),
    properties: FloorForm.querySelectorAll('.result_text'),
    player: FloorForm.querySelector('audio')
}