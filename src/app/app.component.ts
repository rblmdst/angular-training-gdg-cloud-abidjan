import {
  CommonModule,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgStyle,
    FormsModule,
  ],
  template: `
    <!-- IF -->
    <input #level type="text" />
    <button (click)="onCb(level.value)">Click</button>

    <h1
      [ngClass]="{ danger: myColor == 'red', success: myColor == 'green' }"
      [ngStyle]="{ color: myColor }"
    >
      Hello
    </h1>
    <button (click)="onCbStyle()">Style</button>

    <ng-template>
      <h1>No value selected</h1>
    </ng-template>

    <ng-container>
      <h1>Containe</h1>
    </ng-container>
    <!-- <div>
      <p *ngIf="devLevel === 'j'">Junior</p>
      <p *ngIf="devLevel === 'm'">Mid</p>
      <p *ngIf="devLevel === 's'">Senior</p>
      <p *ngIf="devLevel === 'j'">No value selected</p>
    </div> -->
    <!-- For -->
    <!-- <ul>
      <li *ngFor="let product of products; let i = index; let paire = even">
        {{ paire }} - {{ product }}
      </li>
    </ul> -->
    <!-- Switch -->
    <!-- <ng-container *ngIf="">
        <ng-container *ngFor="">
        </ng-container>
      </ng-container> -->

    <ng-container [ngSwitch]="devLevel">
      <p *ngSwitchCase="'j'">Junior</p>
      <p *ngSwitchCase="'m'">Mid</p>
      <p *ngSwitchCase="'s'">Senior</p>
      <p *ngSwitchDefault>No value selected</p>
    </ng-container>

    <textarea [(ngModel)]="test"></textarea>
    {{ test }}
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  test = '';
  title = 'GDG Cloud Abidjan';

  products: string[] = ['PC', 'Ecran', 'Souris', 'clavier'];

  devLevel: string | null = null;

  myColor = 'red';

  onCb(value: string) {
    this.devLevel = value;
  }

  onCbStyle() {
    this.myColor = 'green';
  }
}
