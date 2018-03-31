// var obj ={

// name:'Abhishek'

// };

// var stringObj= JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//ausme we get this using json
// var personString='{"name":"Abhishek","age":21}';

// //convet back to object
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote={
    title:'some tilte',
    body: 'SOme body'
};

//originalNotestring
var originalNotestring= JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNotestring);

var noteString = fs.readFileSync('notes.json');

//note
var note= JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
