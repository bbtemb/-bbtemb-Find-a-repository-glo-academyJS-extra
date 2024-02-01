'use strict';

let arr = ['25', '45', '55', '52', '76', '226', '4000'];
let divCount = 0;

for (let i = 0; i < 7; i++) {
  if (
    Math.floor(arr[i] / 10 ** (arr[i].length - 1)) === 2 ||
    Math.floor(arr[i] / 10 ** (arr[i].length - 1)) === 4
  )
    console.log(arr[i]);
}

for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) divCount++;
  }

  if (divCount == 2) {
    console.log(i, '- Делители этого числа: 1', 'и', i);
  }
  divCount = 0;
}
