import Contact from './AddressBook';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

let contacts: Contact[] = [];
const today = new Date();
const contactOne = new Contact(
  'Mark',
  'Green',
  'mark.green@gmail.com',
  today,
  today,
  uuidv4()
);
console.log(contactOne);
contactOne.updateName('Kasztan');
contactOne.updateName('Wolski');
contactOne.updateEmail('elomasło@gmail.com');
contacts = [...contacts, contactOne];
console.log(contacts);

const form = document.querySelector('#myForm') as HTMLFormElement;
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#username') as HTMLInputElement;
  const surname = document.querySelector('#surname') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const today = new Date();
  const newContact = new Contact(
    name.value.trim(),
    surname.value.trim(),
    email.value.trim(),
    today,
    today,
    uuidv4()
  );
  form.reset();
  contacts = [...contacts, newContact];
  console.log(contacts);
});

// public - default can be change insout/outside and read
// private - it cannot be accessed from outside of its containing class - can be change by methods of the containing class
// protected - like private but can be accessed within deriving classes (subclasses)
//readonly - can be only read inside/outside, cannot be changed
