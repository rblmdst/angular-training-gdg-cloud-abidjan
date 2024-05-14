import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { ContactDetailsComponent } from './features/contact/contact-details/contact-details.component';
import { Test3Component } from './test-3/test-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Test3Component],
  template: `<h1>{{ title }}</h1>
    <div>
      <app-test-3
        (error)="onErrorCb($event)"
        (success)="onSuccessCb($event)"
        [disabled]="true"
        [firstName]="valeur"
        [sex]="'O'"
      />
    </div> `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GDG Cloud Abidjan';
  valeur = 'valeur';

  onErrorCb(ev: { btn: string }) {
    console.log('#Error#');
    console.log(ev);
  }

  onSuccessCb(ev: { btn: string }) {
    console.log('Success !!');
    console.log(ev);
  }
}
