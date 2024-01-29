'use strict';
let lang = 'ru';
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

let langArray = [
  [
    'ru',
    'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.',
  ],
  ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
];

lang == langArray[0][0]
  ? console.log(langArray[0][1])
  : console.log(langArray[1][1]);

let namePerson = 'Артем';
namePerson !== 'Артем' && namePerson !== 'Александр'
  ? console.log('студент')
  : false;
namePerson == 'Артем' ? console.log('директор') : false;
namePerson == 'Александр' ? console.log('преподаватель') : false;
