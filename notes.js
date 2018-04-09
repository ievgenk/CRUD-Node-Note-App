console.log('Starting Notes.js')

let addNote = (title, body) => {
  console.log('Adding note', title, body)
}

let getAll = () => {
  console.log('Getting all notes');
}

let fetchNote = (title) => {
  console.log(`Fetched ${title} note`);
}

let removeNote = (title) => {
  console.log(`Removed ${title}`);
}

module.exports = {
  addNote,
  getAll,
  fetchNote,
  removeNote
}