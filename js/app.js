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
