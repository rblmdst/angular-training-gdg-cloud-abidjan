import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-contact-page.component.html',
  styleUrl: './edit-contact-page.component.css',
})
export class EditContactPageComponent {
  route = inject(ActivatedRoute);
  contactId = '';
  year = '';
  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.contactId = params['contactId'];
    });

    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((queryParams) => {
        this.year = queryParams['year'];
      });
  }
}
