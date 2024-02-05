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
  switch (new Date().getDay()) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 0:
      return 'Воскресенье';
  }
};

const prettyWeek = week.map(function (item) {
  if (item === now()) {
    return (item = '<p><b>' + item + '</b></p>');
  } else if (item === 'Суббота' || item === 'Воскресенье') {
    return (item = '<p><i>' + item + '</i></p>');
  } else {
    return (item = '<p>' + item + '</p>');
  }
});

prettyWeek.forEach(function (item) {
  outputString = outputString + item;
});

arrayOutput.innerHTML = outputString;
