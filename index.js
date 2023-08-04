// import { name, email, phone } from './db/contacts.json';


const {program} = require("commander");

const contacts = require("./db/contacts.json");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "read":
            const allContacts = await contacts.getAll();
            return console.log(allContacts);
        case "getById":
            const oneContact = await contacts.getById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.add({name, email, phone});
            return console.log(newContact);
        case "updateById":
            const updateContact = await contacts.updateById(id, {name, email, phone});
            return console.log(updateContact);
        case "deleteById":
            const deleteContact = await contacts.deleteById(id);
            return console.log(deleteContact);
        default: 
            return console.log("Unknown action")
    }
}

program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-t, --name, <type>")
    .option("-at, --emeil, <type>")
    .option("-at, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options)