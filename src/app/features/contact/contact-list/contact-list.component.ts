import { Component, input, output } from '@angular/core';
import { Contact } from '../../../models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  contacts = input.required<Contact[]>();
  details = output<string>();
  delete = output<string>();

  onDetails(contactId: string) {
    this.details.emit(contactId);
  }

  onDelete(contactId: string) {
    this.delete.emit(contactId);
  }
}
