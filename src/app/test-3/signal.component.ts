import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>{{ age() }}</h1>
    <h1>{{ moyenne() }}</h1>
    <button (click)="onSet()">Set</button>
    <button (click)="onUpdate()">Update</button> `,
})
export class AppComponent {
  title = 'GDG Cloud Abidjan';
  note1 = signal(10);
  note2 = signal(20);

  moyenne = computed(() => {
    return (this.note1() + this.note2()) / 2;
  });

  age = signal(30);

  onSet() {
    this.age.set(15);
  }
  onUpdate() {
    this.note1.update((val) => val + 10);
  }
}
