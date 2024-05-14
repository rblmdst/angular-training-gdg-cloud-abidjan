import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ContactDetailsComponent } from './features/contact/contact-details/contact-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactDetailsComponent],
  template: `<h1>{{ title }}</h1>
    <div>
      <app-contact-details />
    </div> `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GDG Cloud Abidjan';
}
