// const add = require("./utils.js").default;

// const sum = add(2,3);

// console.log(sum);

// const notes =  require("./notes.js")

// const validator = require("validator");

// const note = notes();

// console.log(note);

// console.log(validator.isEmail("Hari@gmail.com"));


const notes = require("./notes.js")
const yargs = require("yargs");

//create add command

yargs.command({
    command:"add",
    describe: "add a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type:"string"
        },
        body: {
            describe:"describe the notes",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command:"remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: "remove title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})

//create list command

yargs.command({
    command:"list",
    describe: "list the notes",
    handler(){
        notes.listNotes();
    }
})

//create read command

yargs.command({
    command:"read",
    describe: "read a note",
    buider: {
        title: {
            describe: "getNotes",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.getNotes(argv.title);
    }
})


yargs.parse();



