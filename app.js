const fs= require('fs');
const _ = require('lodash');
const  yargs = require('yargs');

const notes= require('./notes.js');
var titleoptions={
    describe: 'title of note',
    demand: true,
    alias: 't'
   };
var bodyoptions={
    describe:'body of the note',
    demand: true,
    alias: 'b'
};
const argv = yargs
.command('add','Add a new note',{
title:titleoptions,
body:bodyoptions
})
.command('list','List all notes')
.command('read','Read a note',{
    title:titleoptions
})
.command('remove','Remove an note',{
  title:titleoptions
})
.help()
.argv;
var command = argv._[0];    //process.argv[2];
//console.log('command:',command);


if(command ==='add'){
   var note= notes.addNote(argv.title,argv.body);
   if(note){
    console.log('Note Created');
    notes.logNote(note);
   }
   else
   console.log('Note with similar title already exits');
}


else if (command==='list'){
  var allNotes =  notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s)`);
  allNotes.forEach((note)=>notes.logNote(note));
}

else if (command ==='read'){

 var k = notes.getNote(argv.title);
  if(k)
     notes.logNote(k);
   else
     console.log('Note not found');

}


else if (command==='remove'){
   var noteRemoved= notes.removeNote(argv.title);
   var message = noteRemoved ?'Note was removed':'Note note found';
   console.log(message);
}
 else{
    console.log('command note recognized');
}
