console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');

let filteredArr = _.uniq(['Evgeny', 'Evgeny', 1, 1, 33, 44, 33]);
console.log(filteredArr);



// console.log(_.isString(true))
// console.log(_.isString('Evgeny'))

// let additionResult = notes.add(5, 3);
// console.log(additionResult)
// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (e) => {
//   if (e) {
//     console.log('Unable to write to file')
//   }
// });