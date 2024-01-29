let num = 266219;
let multiplyRes = 1;
// console.log(num.toString().length);

// console.log(Math.floor((num % 10 ** 1) / 10 ** 0));
// console.log(Math.floor((num % 10 ** 2) / 10 ** 1));
// console.log(Math.floor((num % 10 ** 3) / 10 ** 2));
// console.log(Math.floor((num % 10 ** 4) / 10 ** 3));
// console.log(Math.floor((num % 10 ** 5) / 10 ** 4));
// console.log(Math.floor((num % 10 ** 6) / 10 ** 5));

for (
  let digitPosition = 1;
  digitPosition <= num.toString().length;
  digitPosition++
) {
  let digit = Math.floor(
    (num % 10 ** digitPosition) / 10 ** (digitPosition - 1)
  );
  multiplyRes = multiplyRes * digit;
}

console.log('multiplyRes: ', multiplyRes);

let multiplyResCubed = multiplyRes ** 3;

console.log('multiplyResCubed: ', multiplyResCubed);

let array2 = [];

for (
  let digitPosition = 1;
  digitPosition <= multiplyResCubed.toString().length;
  digitPosition++
) {
  let digit = Math.floor(
    (multiplyResCubed % 10 ** digitPosition) / 10 ** (digitPosition - 1)
  );
  array2.push(String(digit));
}

array2 = array2.reverse();
// console.log('array2: ', array2);
let firstTwoDigits = Number(array2[0] + array2[1]);
console.log('firstTwoDigits: ', firstTwoDigits);

// Решение без цикла

let array1 = Array.from(multiplyResCubed.toString(), String);
let firstTwoDigits2 = Number(array1[0] + array1[1]);
console.log('firstTwoDigits2: ', firstTwoDigits2);
