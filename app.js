console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')


const argv = yargs.argv;
let command = yargs.argv._[0];
console.log('Command: ', command)
console.log('Yargs', argv)



switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    return;
  case 'list':
    notes.getAll()
    return;
  case 'read':
    notes.fetchNote(argv.title);
    return;
  case 'remove':
    notes.removeNote(argv.title);
    return;
  default:
    console.log('Command not recognized');
}