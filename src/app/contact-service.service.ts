import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contact, ContactWithoutId } from './models';

const CONTACT_BASE_URL = 'http://localhost:3000/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactHttpService {
  private http = inject(HttpClient);

  constructor() {}

  create(contact: ContactWithoutId) {
    return this.http.post<Contact>(CONTACT_BASE_URL, contact);
  }

  getAll() {
    return this.http.get<Contact[]>(CONTACT_BASE_URL);
  }

  getById(contactId: string) {
    return this.http.get<Contact>(`${CONTACT_BASE_URL}/${contactId}`);
  }

  delete() {}

  update(contact: Contact) {
    const contactId = contact.id;
    return this.http.put(`${CONTACT_BASE_URL}/${contactId}`, contact);
  }
}
