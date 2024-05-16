import { Component, computed, signal } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ContactDetailsComponent } from './features/contact/contact-details/contact-details.component';
import { Test3Component } from './test-3/test-3.component';
import { Contact } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactDetailsComponent],
  template: `
    <app-contact-details (nameClick)="onCb($event)" [contact]="contact" />
  `,
  styleUrl: './app.component.scss',
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
