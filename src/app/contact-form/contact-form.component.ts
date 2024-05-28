import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    id: new FormControl(''),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+[0-9]{10,15}$/),
    ]),
  });

  constructor() {
    console.log(this.contactForm);
  }

  get lastNameCtrl() {
    return this.contactForm.get('lastName');
  }
}
