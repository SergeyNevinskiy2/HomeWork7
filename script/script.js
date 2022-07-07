'use strict';

const enterHours = +prompt('Введите количество часов');
const secondInhour = (60 * 60);
const result = enterHours * secondInhour;

alert(`Итого : ${result} секунд`);