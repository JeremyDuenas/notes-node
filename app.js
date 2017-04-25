console.log("Starting application");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
  console.log('Adding new note');
}
else if (command === 'list'){
  console.log('Listing all notes');
}
else if (command === 'add'){
  console.log('Adding Note');
}
else if (command === 'remove'){
  console.log('Removing Note');
}
else {
  cosole.log('Command not recognized')
}
