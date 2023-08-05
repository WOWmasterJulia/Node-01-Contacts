const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// const contactsPath = path.join('/Desktop/ВСЕ новое с 1.09.22/2. GoIT FRONTEND COURS/8. GITHub/6. NODE projects/Node-01-Contacts', 'contacts.json');
// const contactsPath = path.join(__dirname, "contacts.json");
// fs.readFile(contactsPath,'utf8')
//     .then(data => console.log(data))
//     .catch(error => console.table(error.message));


/*
 * Раскомментируй и запиши значение
const contactsPath = ;
 */
const contactsPath = path.join(__dirname, 'db', 'contacts.json');


// // TODO: задокументировать каждую функцию


// function listContacts() {
//     // ...твой код. Возвращает массив контактов.
// }
const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}
  
// function getContactById(contactId) {
//     // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
// }
 const getContactById = async(id) => {
    const contacts = await listContacts();
    const result = contacts.find(elem => elem.id === id);
    return result || null; 
  }

// function removeContact(contactId) {
//     // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
// }
const removeContact = async(id) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(elem => elem.id === id);
    if (index === -1) {return null};
    const [result] = contacts.splice(index,1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return result;
}
  
// function addContact(name, email, phone) {
//     // ...твой код. Возвращает объект добавленного контакта.
// }
 const addContact = async(data) => {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), ...data };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  }

  module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}
