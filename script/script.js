'use strict';

const enterHours = +prompt('Введите количество часов');
const secondInHour = (60 * 60);
const result = enterHours * secondInHour;

alert(`Итого : ${result} секунд`);