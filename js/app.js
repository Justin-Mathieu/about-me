'use strict';

let username= prompt('What is your name?');
confirm('Hi ' + username + ' Answer some of these questions about me!');

let dogname= prompt('Is my dog named Larry');
if(dogname === 'yes'){
//   console.log('Incorrect!')
  alert('Incorrect!');}
else if(dogname === 'no'){
  //console.log('Correct!')
  alert('Correct!');}
//console.log('That is not an answer')
else{alert('That is not an answer!');}

let place= prompt('Do I live in vancouver, WA?');
if(place === 'yes'){
//console.log('Correct)
  alert('Correct');}
else if(place === 'no'){
//console.log('Incorrect!')
  alert('Incorrect');}
//console.log('Please answer yes or no')
else{alert('Please answer "yes" or "no"!');}

let food= prompt('Is my favorite food pizza?');
if(food === 'yes'){
//console.log('Incorrect!')
  alert('Incorrect!');}
else if(food === 'no'){
//console.log('Correct!')
  alert('Correct!');}
else{
//console.log('Please enter yes or no)
  alert('Please enter "yes" or "no"');}

let color= prompt('Is my favorite color red?');
if(color === 'yes'){
//console.log('Correct!)
  alert('Correct!');}
else if(color === 'no'){
//console.log('Incorrect!')
  alert('Incorrect!');}
else{
//console.log('yes or no please')
  alert('"yes" or "no" please!');}

let music= prompt('Is jazz my favorite genre of music?');
if(music === 'yes'){
//console.log('Incorrect!')
  alert('Incorrect!');}
else if(music === 'no'){
//console.log('Correct')
  alert('Correct!');}
else{
//console.log('yes or no')
  alert('"yes" or"no"');}
//console.log('Thankyou!)
alert('Thank you!' + username);
As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

let favcolor = ["red", "green", "blue"];
//let favcolor = "red";
let maxAttempts = 7;
let currentAttempt = 0;
while (currentAttempt < maxAttempts) {
  let response = prompt("guess a color");
  //for (let i = 0; i < favcolor.length; i++) {
  if (response === favcolor) {
    alert("Correct!");
    break;
  }
  alert(`Incorrect! ${maxAttempts - currentAttempt - 1} attempts remaning`);

  //}
  currentAttempt++;
}
