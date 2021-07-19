// // Episode 1
// // I expect the terminal to return The murderder is Miss Scarlet.
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);


// //Episode 2
// // // Error - const changeMurderer function is trying to change the value of the const murderer variable
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // // Episode 3
// let murderer = 'Professor Plum'; //murder = 'Professor Plum'

// const declareMurderer = function() { //function changes murderer to Mrs. Peacock and returns `The murderer is ${murderer}.`
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer(); //firstVerdict when called calls declareMurderer function
// console.log('First Verdict: ', firstVerdict); //terminal prints Mrs.Peacock

// const secondVerdict = `The murderer is ${murderer}.`; //value of secondVerdict is string that includes ${murderer} which is still Professor Plum 
// console.log('Second Verdict: ', secondVerdict); //terminal prints Professor Plum

// // // Episode 4
// let suspectOne = 'Miss Scarlet'; //suspectOne is Miss Scarlet
// let suspectTwo = 'Professor Plum'; //suspectTwo is Professor Plum
// let suspectThree = 'Mrs. Peacock'; //suspectThree is Mrs. Peacock

// const declareAllSuspects = function() { 
//   let suspectThree = 'Colonel Mustard';//when called the declareAllSuspects function changes suspectThree to Colonel Mustard
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; //it then returns this string containing the three suspects (including updated suspect 3)
// }

// const suspects = declareAllSuspects(); // suspects variable is declareAllSuspects function
// console.log(suspects); // Console prints the string containing the three suspects (including updated suspect 3)
// console.log(`Suspect three is ${suspectThree}.`); // Console prints Suspect three is Mrs Peacock (as the function that change suspect 3 wasn't called for this?)

// // // Episode 5
// const scenario = { // scenario variable is an object with the three keys/values
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) { // changeWeapon function takes an argument and uses it to change the weapon value of the scenario object
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() { // declareWeapon function returns a string that includes the weapon value of the scenario object
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver'); //changeWeapon function is called and given Revolver as argument, changing the scenario.weapon to Revolver from Candle Stick
//   const verdict = declareWeapon(); //verdict variable is the declareWeapon function
//   console.log(verdict); // console prints the The Weapon is the ${scenario.weapon}.` string with the updated Revolver weapon

// // // Episode 6
// let murderer = 'Colonel Mustard'; // murderer is Colonel Mustart

// const changeMurderer = function() { 
//   murderer = 'Mr. Green'; // changeMurderer function when called updates murderer to Mr.Green

//   const plotTwist = function() { 
//     murderer = 'Mrs. White'; // within the same function the plotTwist function is is established which changes murderer to Mrs. White
//   }

//   plotTwist(); //the plot twist function is called overwriting the earlier change to Mr.Green with the new Mrs. White
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`; //declareMurderer function returns string with murderer variable value
// }

// changeMurderer(); // change Murderer function is called, resulting in the murderer becoming Mrs.White
// const verdict = declareMurderer(); //verdict variable is the declareMurderer function
// console.log(verdict); // console prints The Murderer is Mrs.White

// // // // Episode 7 - NOT SURE ON THIS ONE, seems like the plotTwist function isn't actually running, leaving the murderer as Mr.Green when changeMurderer is called

// let murderer = 'Professor Plum'; //murder is Professor Plum

// const changeMurderer = function() { 
//   murderer = 'Mr. Green'; // when called the changeMurderer function changes murderer to Mr.Green

//   const plotTwist = function() { 
//     let murderer = 'Colonel Mustard'; //the function also establishes the variable plotTwist which when called would change the murderer to Colonel Mustard

//     const unexpectedOutcome = function() { 
//       murderer = 'Miss Scarlet'; //the plot witsh function ALSO establishes a function that when called changes the murder to Miss Scarlet
//     }

//     unexpectedOutcome(); // the unexpected outcome funciton at this point in the plotTwist function is called, changing the murderer to Miss Scarlet
//   }

//   plotTwist(); //
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`; //declareMurderer function returns string with murderer variable value
// }

// changeMurderer(); //change murderer function is called which ultimately results in the murderer being changed to Colonel Mustard
// const verdict = declareMurderer(); //verdict variable is the declareMurderer function
// console.log(verdict); //console prints The Murderer is Colonel Mustard

// // // Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock'; //changeScenario function updates murderer to Mrs.Peacock >> murderer is now Mrs.Peacock
//     scenario.room = 'Dining Room'; //changeScenario function updates room to Dining Room >> room is now Dining Room
  
//     const plotTwist = function(room) { // plotTwist function is established and takes room argument
//       if (scenario.room === room) { //if statement checks if the current room is the same as the room provided == it does
//         scenario.murderer = 'Colonel Mustard'; // if so the murderer becomes Colonel Mustart >> murderer is now Colonel Mustard
//       }
  
//       const unexpectedOutcome = function(murderer) { //as part of plotTwist the unexpectedOutcome function is established and takes murderer argument
//         if (scenario.murderer === murderer) { // it does 
//           scenario.weapon = 'Candle Stick'; //if current murderer matches the murderer provided then the weapon is updated to candle stick >> weapon in now Candle Stick
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard'); //the unexpected outcome function is called and given Colonel Mustard as an argument
//     }
  
//     plotTwist('Dining Room'); //the plotTwist function is called and given Dining Room as the argument
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.` //the declareWeapon function prints the current weapon
//   }
  
//   changeScenario(); //the change scenario is called
//   const verdict = declareWeapon();
//   console.log(verdict); //consoel prints CandleStick

// // // Episode 9
// let murderer = 'Professor Plum'; //murderer is Professor Plum

// if (murderer === 'Professor Plum') { //it does match
//   let murderer = 'Mrs. Peacock'; // however murderer is declared as a new variable here rather than reassigning it, so this local variable is not the one called later
// }

// const declareMurderer = function() { 
//   return `The murderer is ${murderer}.`; //function declares murderer
// }

// const verdict = declareMurderer();
// console.log(verdict);