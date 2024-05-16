import { Component } from '@angular/core';
import { ContactDetailsComponent } from '../features/contact/contact-details/contact-details.component';
import { Contact } from '../models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactDetailsComponent],
  template: `
    <app-contact-details (nameClick)="onCb($event)" [contact]="contact" />
  `,
})
export class AppComponent {
  title = 'GDG Cloud Abidjan';
  contact: Contact = {
    id: 'abaef',
    lastName: 'Henri20',
    firstName: 'Kokou',
    phoneNumber: '+22570000000',
  };

  onCb(phoneNumber: string) {
    alert(phoneNumber);
  }
}
