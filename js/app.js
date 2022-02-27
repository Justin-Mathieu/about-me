'use strict';
let score = 0;
function dogFunction() {
  let username = prompt('What is your name?');
  confirm('Hi ' + username + ' Answer some of these questions about me!');

  let dogname = prompt('Is my dog named Larry');
  dogname = dogname.toLocaleLowerCase();
  if (dogname === 'yes') {
    alert('Incorrect!');
  } else if (dogname === 'no') {
    alert('Correct!');
    score++;
  } else {
    alert('That is not an answer!');
  }
}
dogFunction();
function placeFunction() {
  let place = prompt('Do I live in vancouver, WA?');
  place = place.toLowerCase();
  if (place === 'yes') {
    alert('Correct');
    score++;
  } else if (place === 'no') {
    alert('Incorrect');
  } else {
    alert('Please answer "yes" or "no"!');
  }
}
placeFunction();
function foodFunction() {
  let food = prompt('Is my favorite food pizza?');
  food = food.toLowerCase();
  if (food === 'yes') {
    alert('Incorrect!');
  } else if (food === 'no') {
    alert('Correct!');
    score++;
  } else {
    alert('Please enter "yes" or "no"');
  }
}
foodFunction();
function colorFunction() {
  let color = prompt('Is my favorite color red?');
  color = color.toLowerCase();
  if (color === 'yes') {
    alert('Correct!');
    score++;
  } else if (color === 'no') {
    alert('Incorrect!');
  } else {
    alert('"yes" or "no" please!');
  }
}
colorFunction();
function musicFunction() {
  let music = prompt('Is jazz my favorite genre of music?');
  music = music.toLowerCase();
  if (music === 'yes') {
    alert('Incorrect!');
  } else if (music === 'no') {
    alert('Correct!');
    score++;
  } else {
    alert('"yes" or"no"');
  }
}
musicFunction();

let answerCorrect = false;
let favColor = ['red', 'blue', 'green'];
let colorAttempt = 6;
for (let i = 0; i < colorAttempt; i++) {
  let guessColor = prompt(
    'Can you guess one of my favorite colors'
  ).toLocaleLowerCase();
  for (let j = 0; j < favColor.length; j++) {
    if (guessColor === favColor[j]) {
      alert('Correct!!');
      score++;
      answerCorrect = true;
      break;
    }
  }

  if (answerCorrect === true) {
    break;
  } else {
    alert(`Try again! you have ${colorAttempt - [i]} attempts left`);
  }
}
alert(`The possible answers were ${favColor}`);
let numattempt = 5;

for (let i = 0; i < numattempt; i++) {
  let guessNumber = prompt('guess a number');
  guessNumber = parseInt(guessNumber);
  if (guessNumber === 10) {
    alert('Correct!!');
    score++;
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
  } else {
    alert('The correct answer was 10');
  }
}

alert(`your score is ${score}`);
