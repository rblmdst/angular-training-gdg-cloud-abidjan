import { Component } from '@angular/core';
import { Contact } from '../models';
import { ContactDetailsComponent } from '../features/contact/components/ui/contact-details/contact-details.component';

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
