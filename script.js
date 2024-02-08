'use strict';

let outputString = '';
let arrayOutput = document.querySelector('#array__output');

const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const now = function () {
  let dayId = new Date().getDay();
  return dayId === 0 ? week[6] : week[dayId - 1];
};

const currentDay = now();

const prettyWeek = week.map(function (item) {
  if (item === currentDay) {
    return '<p><b>' + item + '</b></p>';
  } else if (item === 'Суббота' || item === 'Воскресенье') {
    return '<p><i>' + item + '</i></p>';
  } else {
    return '<p>' + item + '</p>';
  }
});

prettyWeek.forEach(function (item) {
  outputString = outputString + item;
});

arrayOutput.innerHTML = outputString;
