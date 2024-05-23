import { Component, input, output } from '@angular/core';
import { NgFor } from '@angular/common';
import { Contact } from '../../../../../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  // providers: [ContactService],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  contacts = input.required<Contact[]>();
  details = output<string>();
  delete = output<string>();

  constructor(/* private contactServ: ContactService */) {}

  onDetails(contactId: string) {
    // this.contactServ.getContacts();
    this.details.emit(contactId);
  }

  onDelete(contactId: string) {
    this.delete.emit(contactId);
  }
}
