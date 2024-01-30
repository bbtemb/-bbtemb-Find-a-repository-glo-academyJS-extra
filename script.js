'use strict';

const notAString = 123;
const moreThan30 = 'аааааааааааааааааааааааааааааааaaaaaaaaaaaaaaaaaaaa';
const lessThan30 = 'Меньше 30 символов';
const moreThan30WithSpaces =
  '             ааааааааааааааааааааааааааа                   ';

const getShotrer = function (str) {
  if (typeof str !== 'string') {
    return 'Данные не являются строкой';
  } else {
    str = str.trim();
    if (str.length > 30) {
      return str.slice(0, 30) + '…';
    } else {
      return str;
    }
  }
};

console.log(getShotrer(notAString));
console.log(getShotrer(moreThan30));
console.log(getShotrer(lessThan30));
console.log(getShotrer(moreThan30WithSpaces));

console.log(typeof moreThan30.length);
