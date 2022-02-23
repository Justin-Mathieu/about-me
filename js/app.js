'use strict';
let score = 0;
let username;
function dogFunction(){
let username = prompt('What is your name?');
confirm('Hi ' + username + ' Answer some of these questions about me!');

let dogname = prompt('Is my dog named Larry');
dogname = dogname.toLocaleLowerCase();
if (dogname === 'yes') {
  //   console.log('Incorrect!')
  alert('Incorrect!');
} else if (dogname === 'no') {
  //console.log('Correct!')
  alert('Correct!');
  score++;
}
//console.log('That is not an answer')
else {
  alert('That is not an answer!');
}
}
dogFunction();
function placeFunction(){
let place = prompt('Do I live in vancouver, WA?');
place = place.toLowerCase();
if (place === 'yes') {
  //console.log('Correct)
  alert('Correct');
  score++;
} else if (place === 'no') {
  //console.log('Incorrect!')
  alert('Incorrect');
}
//console.log('Please answer yes or no')
else {
  alert('Please answer "yes" or "no"!');
}
}
placeFunction();
function foodFunction(){
let food = prompt('Is my favorite food pizza?');
food = food.toLowerCase();
if (food === 'yes') {
  //console.log('Incorrect!')
  alert('Incorrect!');
} else if (food === 'no') {
  //console.log('Correct!')
  alert('Correct!');
  score++;
} else {
  //console.log('Please enter yes or no)
  alert('Please enter "yes" or "no"');
}
}
foodFunction();
function colorFunction(){
let color = prompt('Is my favorite color red?');
color = color.toLowerCase();
if (color === 'yes') {
  //console.log('Correct!)
  alert('Correct!');
  score++;
} else if (color === 'no') {
  //console.log('Incorrect!')
  alert('Incorrect!');
} else {
  //console.log('yes or no please')
  alert('"yes" or "no" please!');
}
}
colorFunction();
function musicFunction(){
let music = prompt('Is jazz my favorite genre of music?');
music = music.toLowerCase();
if (music === 'yes') {
  //console.log('Incorrect!')
  alert('Incorrect!');
} else if (music === 'no') {
  //console.log('Correct')
  alert('Correct!');
  score++;
} else {
  //console.log('yes or no')
  alert('"yes" or"no"');
}
}
musicFunction();
console.log('Thankyou!');
alert('Thank you!' + username);
//let favcolor = ['red', 'green', 'blue'];
//favcolor = favcolor.toLowerCase();
//let favcolor = "red";
// let maxAttempts = 7;
// let currentAttempt = 0;
// while (currentAttempt < maxAttempts) {
//   let response = prompt('guess a color');
//   //for (let i = 0; i < favcolor.length; i++) {
//   if (response === favcolor) {
//     alert('Correct!');
//     break;
//   }
// //   alert(`Incorrect! ${maxAttempts - currentAttempt - 1} attempts remaning`);

// //   currentAttempt++;
let numattempt = 5;

for (let i = 0; i < numattempt; i++) {
  let guessNumber = prompt('guess a number');
  guessNumber = parseInt(guessNumber);
  if (guessNumber === 10) {
    alert('Correct!!');
    break;
  }

  if (guessNumber < 10) {
    alert(
      `Too low!! try again! you have You have ${numattempt - [i]} attempts left`
    );
  }
  if (guessNumber > 10) {
    alert(
      `Too high! try again! you have You have ${numattempt - [i]} attempts left`
    );
  }
}
