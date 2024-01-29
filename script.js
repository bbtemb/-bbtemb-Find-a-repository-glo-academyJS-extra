'use strict';
const lang = 'en';
console.log('lang: ', lang);

if (lang == 'ru') {
  console.log(
    'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.'
  );
} else if (lang == 'en') {
  console.log(
    'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
  );
} else {
  console.log('Недопустимое значение переменной');
}

switch (lang) {
  case 'ru':
    console.log(
      'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.'
    );
    break;
  case 'en':
    console.log(
      'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
    );
    break;
  default:
    console.log('Недопустимое значение переменной');
}

const langArray = [
  [
    'ru',
    'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.',
  ],
  ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
];

lang == langArray[0][0]
  ? console.log(langArray[0][1])
  : console.log(langArray[1][1]);

const namePerson = 'Артем';

let message =
  namePerson === 'Артем'
    ? 'директор'
    : namePerson === 'Александр'
    ? 'преподаватель'
    : 'студент';

console.log(message);
