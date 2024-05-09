import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  template: `<h1>{{ title }}</h1>
    <div>
      <app-test />
    </div> `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GDG Cloud Abidjan';
}
