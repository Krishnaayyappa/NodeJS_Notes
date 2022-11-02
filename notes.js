const fs = require("fs");
const chalk = require("chalk")

const getNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note){
        console.log(chalk.bold.red(note.title) + ":" + note.body);
    }else {
        console.log(chalk.bgRed("Unable to find the given title"));
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const isDuplicate = notes.find(note => note.title === title);

    if (!isDuplicate){
        console.log(chalk.bgGreen("adding notes to the file"));
        notes.push({title:title, body:body});
        sendNotes(notes);  
    }else{
        console.log(chalk.bgRed("the title already exists"));
    }   
}

const loadNotes = () => {
    try{
        const bufferNotes = fs.readFileSync("notesJson.json");
        const JsonNotes = bufferNotes.toString();
        return JSON.parse(JsonNotes);
    }catch(e){
        return []
    }
}

const sendNotes = (notes) => {
    const jsonNotes = JSON.stringify(notes);
    fs.writeFileSync("notesJson.json", jsonNotes);
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter(note => note.title !== title);
    if(updatedNotes.length < notes.length){
        sendNotes(updatedNotes);
        console.log(chalk.bgGreen("Note removed"));
    }else {
        console.log(chalk.bgRed("No note found"));
    }
    
}

const listNotes = () => {
    console.log(chalk.bold.blue("List of Notes"))
    list = loadNotes();
    list.forEach(note => console.log(chalk.red("title:" + note.title) + " " + chalk.green("body:" + note.body)));
}

module.exports = {
    addNotes: addNotes,
    getNotes: getNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
}