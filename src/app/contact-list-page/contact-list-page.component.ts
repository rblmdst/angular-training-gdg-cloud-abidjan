import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactDetailsComponent } from '../features/contact/components/ui/contact-details/contact-details.component';
import { ContactListComponent } from '../features/contact/components/ui/contact-list/contact-list.component';
import { Contact } from '../models';
import { ContactService } from '../features/contact/services/contact-service.service';
import { HttpClient } from '@angular/common/http';
import { ContactHttpService } from '../contact-service.service';

@Component({
  selector: 'app-contact-list-page',
  standalone: true,
  imports: [ContactListComponent, ContactDetailsComponent, NgIf],
  templateUrl: './contact-list-page.component.html',
  styleUrl: './contact-list-page.component.css',
})
export class ContactListPageComponent {
  contacts: Contact[] = [];
  currentContact: Contact | null = null;
  // private contactServ = inject(ContactService);
  private contactService = inject(ContactHttpService);

  constructor(/* private contactServ: ContactService */) {
    // this.contacts = this.contactServ.getAll();
    this.contactService.getAll().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (err) => {
        console.log(err);
        this.contacts = [];
      },
    });
  }

  showDetails(contactId: string) {
    // this.currentContact = this.contactServ.getById(contactId);
  }

  onDelete(contactId: string) {
    /* this.contactServ.delete(contactId);
    this.contacts = this.contactServ.getAll();
    this.currentContact = null; */
  }
}
