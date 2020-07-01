/******************
 * YOUR CODE HERE *
******************/
const doubleAll = (num) => {
  let emptyArr = [];
  for (let i = 0; i < num.length; i++) {
    emptyArr.push(num[i] * 2) 
  }
return emptyArr
}

const yelledGreetings = (str) => {
  let emptyArr = [];
  for (let i = 0; i < str.length; i++) {
    emptyArr.push(str[i] + '!')
  }
  return emptyArr;
}

const absoluteValues = (numbers) => {
  let emptyArr = [];
  for (let i = 0; i < numbers.length; i++) {
    emptyArr.push(Math.abs(numbers[i]));
  }
  return emptyArr
}

const upperCaseFirstLetters = (letters) => {
  let emptyArr = [];
  for (let i = 0; i < letters.length; i++) {
    emptyArr += letters[0].toUpperCase();
  }
  return emptyArr
}

const doubleOdd = (num) => {
  let arr = [];
  for (let i = 0; i < num.length; i++){
    if (num[i] % 2 === 1){
      arr.push(num[i] * 2);
    }else {
    arr.push(Math.abs(num[i]));
  }
}
return arr;
}

const add1ToLeft = (num) => {
  let one = 1;
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === Math.abs()) {
      arr.push( one++ + num[i]);

    }
  }
  
return arr
}







/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
