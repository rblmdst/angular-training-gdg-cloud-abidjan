import { Component, inject } from '@angular/core';
import { Contact } from './models';
import { NgIf } from '@angular/common';
import { ContactListComponent } from './features/contact/components/ui/contact-list/contact-list.component';
import { ContactDetailsComponent } from './features/contact/components/ui/contact-details/contact-details.component';
import { ContactService } from './features/contact/services/contact-service.service';

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
  contacts: Contact[] = [];

  currentContact: Contact | null = null;

  private contactServ = inject(ContactService);
  constructor(/* private contactServ: ContactService */) {
    this.contacts = this.contactServ.getAll();
  }

  showDetails(contactId: string) {
    this.currentContact = this.contactServ.getById(contactId);
  }

  onDelete(contactId: string) {
    this.contactServ.delete(contactId);
    this.contacts = this.contactServ.getAll();
    this.currentContact = null;
  }
}
