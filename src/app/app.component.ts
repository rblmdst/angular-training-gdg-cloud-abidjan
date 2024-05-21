import { Component } from '@angular/core';
import { ContactListComponent } from './features/contact/contact-list/contact-list.component';
import { Contact } from './models';
import { ContactDetailsComponent } from './features/contact/contact-details/contact-details.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent, ContactDetailsComponent, NgIf],
  template: `
    <app-contact-list
      [contacts]="contacts"
      (delete)="onDelete($event)"
      (details)="showDetails($event)"
    />
    <ng-container *ngIf="currentContact">
      <app-contact-details [contact]="currentContact" />
    </ng-container>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  test = '';
  title = 'GDG Cloud Abidjan';
  contacts: Contact[] = [
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

  currentContact: Contact | null = null;

  showDetails(contactId: string) {
    const contact = this.contacts.find((contact) => contact.id === contactId);
    this.currentContact = contact ? contact : null;
  }

  onDelete(contactId: string) {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
    this.currentContact = null;
  }
}
