/*
 * Раскомментируй и запиши значение
const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//     // ...твой код. Возвращает массив контактов.
// }

// function getContactById(contactId) {
//     // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
// }

// function removeContact(contactId) {
//     // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
// }

// function addContact(name, email, phone) {
//     // ...твой код. Возвращает объект добавленного контакта.
// }

const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join('/Desktop/ВСЕ новое с 1.09.22/2. GoIT FRONTEND COURS/8. GITHub/6. NODE projects/Node-01-Contacts', 'contacts.json');
// const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

fs.readFile(contactsPath,'utf8')
    .then(data => console.log(data))
    .catch(error => console.table(error.message));
  
// const getAll = async () => {
//     const data = await fs.readFile(contactsPath);
//     return JSON.parse(data);
// }

// const getById = async (id) => {
//     const contacts = await getAll();
//     const result = contacts.find(item => item.id === id);
//     return result || null;
// }

// const add = async(data) => {
//     const contacts = await getAll();
//     const newContacts = {
//         id: nanoid(),
//         ...data,
//     }
//     contacts.push(newContacts);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return newContacts;
// }

// const updateById = async(id, data) => {
//     const contacts = await getAll();
//     const index = contacts.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }
//     contacts[index] = {id, ...data};
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return contacts[index];
// }

// const deleteById = async(id) => {
//     const contacts = await getAll();
//     const index = contacts.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }
//     const [result] = contacts.splice(index, 1);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return result;
// }

// module.exports = {
//     getAll,
//     getById,
//     add,
//     updateById,
//     deleteById,
// }