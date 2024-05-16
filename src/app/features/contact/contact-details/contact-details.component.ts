import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';
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
  // @Input({ required: true }) contact!: Contact;
  // contact = input<Contact>();
  contact = input.required<Contact>();

  // @Output() nameClick = new EventEmitter();
  nameClick = output<string>();

  onNameClicked() {
    this.nameClick.emit(this.contact().phoneNumber);
  }
}
