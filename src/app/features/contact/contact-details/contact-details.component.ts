import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../../models';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  contact: Contact = {
    id: 'abaef',
    lastName: 'Henri',
    firstName: 'Kokou',
    phoneNumber: '+22570000000',
  };
}
