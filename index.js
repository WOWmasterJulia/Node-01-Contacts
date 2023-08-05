const {program} = require("commander");

const contacts = require("./contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
      console.log(action);
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        
        
        // case "updateById":
        //     const updateContact = await contacts.updateById(id, {name, email, phone});
        //     return console.log(updateContact);
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