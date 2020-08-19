// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
// Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
import { nameCheck, surnameCheck, isEmail } from './ValidationRules';
import { hasPersonalInfoChangers } from './Interfaces';

const nameMinLength = 3;

export default class Contact implements hasPersonalInfoChangers {
  constructor(
    private name: string,
    private surname: string,
    private email: string,
    private modificationDate: Date,
    readonly creationDate: Date,
    readonly _id: string
  ) {}

  updateName(newName: string): void {
    if (!nameCheck(newName) && newName.length < nameMinLength) {
      throw new Error(
        'Please enter valid name. Name has a min length of ' + nameMinLength
      );
    }
    this.name = newName;
    this.modificationDate = new Date();
  }

  updateSurName(newSurName: string): void {
    if (!surnameCheck(newSurName) && newSurName.length < nameMinLength) {
      throw new Error(
        'Please enter valid surname. Surname has a min length of ' +
          nameMinLength
      );
    }
    this.surname = newSurName;
    this.modificationDate = new Date();
  }
  updateEmail(newEmail: string): void {
    if (!isEmail(newEmail)) {
      throw new Error('Please enter valid address!');
    }
    this.email = newEmail;
    this.modificationDate = new Date();
  }
}

// name: string;
// surname: string;
// email: string;
// modificationDate: Date;
// creationDate: Date;
// _id: string;
// constructor(name: string, surname: string, email: string, modificationDate: Date, creationDate: Date, _id: string) {
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.modificationDate = modificationDate;
//   this.creationDate = creationDate;
//   this._id = _id;
// }
