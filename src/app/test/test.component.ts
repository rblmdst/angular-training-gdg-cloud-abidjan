import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  count = 0;

  inputClass: 'red' | 'green' = 'green';
  inputType: 'password' | 'text' = 'password';

  onCheck(val: string) {
    console.log({ val });
  }

  onInc() {
    this.count = this.count + 1;
  }
  onDec() {
    this.count = this.count - 1;
  }

  onToggle() {
    if (this.inputType == 'password') {
      this.inputType = 'text';
      this.inputClass = 'red';
    } else {
      this.inputType = 'password';
      this.inputClass = 'green';
    }
  }
}
