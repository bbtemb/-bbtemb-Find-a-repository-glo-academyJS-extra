'use strict';

let outputString = '';
let arrayOutput = document.querySelector('#array__output');

let formattedDateA = '';
let formattedDateB = '';

let currentDate = '';
let weekday = 0;
let day = 0;
let month = '';
let monthNumber = 0;
let year = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const monthsOfYear = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const hourDeclensionArr = ['час', 'часа', 'часов'];
const minuteDeclensionArr = ['минута', 'минуты', 'минут'];
const secondDeclensionArr = ['секунда', 'секунды', 'секунд'];

let hourDeclension = '';
let minuteDeclension = '';
let secondDeclension = '';

function getValues() {
  currentDate = new Date();
  weekday = daysOfWeek[currentDate.getDay()];
  day = currentDate.getDate();
  month = monthsOfYear[currentDate.getMonth()];
  monthNumber = currentDate.getMonth() + 1;
  year = currentDate.getFullYear();
  hours = currentDate.getHours();
  minutes = currentDate.getMinutes().toString();
  seconds = currentDate.getSeconds().toString();
}

function getHourDeclension() {
  if (hours === 1 || hours === 21) {
    hourDeclension = hourDeclensionArr[0];
  } else if (
    hours === 2 ||
    hours === 3 ||
    hours === 4 ||
    hours === 22 ||
    hours === 23
  ) {
    hourDeclension = hourDeclensionArr[1];
  } else {
    hourDeclension = hourDeclensionArr[2];
  }
  return hourDeclension;
}
function getDeclension(elem, arr) {
  let declension = '';
  if (elem > 4 && elem < 21) {
    declension = arr[2];
  } else if (elem.charAt(elem.length - 1) == 1) {
    declension = arr[0];
  } else if (
    elem.charAt(elem.length - 1) == 2 ||
    elem.charAt(elem.length - 1) == 3 ||
    elem.charAt(elem.length - 1) == 4
  ) {
    declension = arr[1];
  } else declension = arr[2];

  return declension;
}

function twoDigits(num) {
  return ('0' + num).slice(-2);
}

function getformattedDateA() {
  formattedDateA = `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hours} ${getHourDeclension()} ${minutes} ${getDeclension(
    minutes,
    minuteDeclensionArr
  )} ${seconds} ${getDeclension(seconds, secondDeclensionArr)}`;
  return formattedDateA;
}
function getformattedDateB() {
  formattedDateB = `${twoDigits(day)}.${twoDigits(
    monthNumber
  )}.${year} - ${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  return formattedDateB;
}

setInterval(() => {
  getValues();
  outputString = getformattedDateA() + '<br>' + getformattedDateB();
  arrayOutput.innerHTML = outputString;
}, 1000);
