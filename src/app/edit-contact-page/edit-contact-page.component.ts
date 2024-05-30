import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactHttpService } from '../contact-service.service';
import { switchMap } from 'rxjs';
import { Contact } from '../models';

@Component({
  selector: 'app-edit-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './edit-contact-page.component.html',
  styleUrl: './edit-contact-page.component.css',
})
export class EditContactPageComponent {
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactHttpService);
  private router = inject(Router);

  params$ = this.route.params;
  contact: Contact | null = null;
  // contactId = '';
  year = '';
  constructor() {
    /* this.params$.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.contactId = params['contactId'];
    }); */
    this.params$
      .pipe(
        switchMap((params) => {
          const contactId = params['contactId'];
          return this.contactService.getById(contactId);
        }),
        takeUntilDestroyed()
      )
      .subscribe({
        next: (contact) => {
          this.contact = contact;
        },
        error: (err) => {
          console.log(err);
          this.contact = null;
        },
      });

    /* contactService */

    /* this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((queryParams) => {
        this.year = queryParams['year'];
      }); */
  }

  onEdit(contact: Contact) {
    this.contactService.update(contact).subscribe({
      next: (contact) => {
        this.router.navigate(['/contacts']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
