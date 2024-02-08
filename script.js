'use strict';

let outputString = '';
let arrayOutput = document.querySelector('#array__output');

function getCurrentDateTime() {
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

  const currentDate = new Date();
  const weekday = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedDate = `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hours} час ${minutes} минут ${seconds} секунды`;

  return formattedDate;
}

outputString = getCurrentDateTime();
arrayOutput.innerHTML = outputString;
