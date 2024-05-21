import { Injectable } from '@angular/core';
import { Contact } from '../../../models';

let id = 0;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  ID: number | undefined;
  private contacts: Contact[] = [
    {
      id: 'de8bcf76-e2d6-4930-8f91-73432a3ca2a1',
      lastName: 'KWAKU',
      firstName: 'Eric',
      phoneNumber: '+22570000000',
    },
    {
      id: 'ab8bcf32-e2ab-4930-8fef-00432a1a3ca2',
      lastName: 'OUSSAMA',
      firstName: 'Ali',
      phoneNumber: '+22571200250',
    },
    {
      id: 'cf76de8b-e2d6-4991-8f30-73ca2a1432a3',
      lastName: 'ADOTE',
      firstName: 'Hermman',
      phoneNumber: '+225640002200',
    },
  ];

  constructor() {
    id++;
    this.ID = id;
  }

  getAll(): Contact[] {
    console.log(`[${this.ID}]`);
    return this.contacts;
  }

  delete(contactId: string): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
  }

  getById(contactId: string): Contact | null {
    return this.contacts.find((contact) => contact.id === contactId) || null;
  }
}
