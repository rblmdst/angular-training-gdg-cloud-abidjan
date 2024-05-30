import { Component, inject } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactWithoutId } from '../models';
import { ContactHttpService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './create-contact-page.component.html',
  styleUrl: './create-contact-page.component.css',
})
export class CreateContactPageComponent {
  private contactService = inject(ContactHttpService);
  private router = inject(Router);

  onCreate(contact: ContactWithoutId) {
    this.contactService.create(contact).subscribe({
      next: (createdContact) => {
        console.log(createdContact);
        this.router.navigate(['/contacts']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
