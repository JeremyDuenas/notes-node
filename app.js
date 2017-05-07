console.log("Starting application");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    console.log('__');
    notes.logNote(note);
  } else {
    console.log('Note title taken')
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  var note = notes.readNote(argv.title);
  if (note){
    console.log('Note found');
    notes.logNote(note);
  } else{
    console.log('Note not found');
  }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Not was not removed';
  console.log(message);
} else {
  console.log('Command not recognized')
}
