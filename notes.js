console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {

    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var readNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  // get notes
  var notes = fetchNotes(title);
  //filter notes, remove note with same title as argv
  var filteredNotes = notes.filter((note) => note.title!== title);
  saveNotes(filteredNotes);

  return notes.length !== filter(filteredNotes.length)

  console.log('Removing Note', title);
}

module.exports = {
  addNote: addNote,
  //addNote
  getAll: getAll,
  readNote: readNote,
  removeNote
}
