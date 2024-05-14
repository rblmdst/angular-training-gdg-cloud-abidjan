import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-3.component.html',
  styleUrl: './test-3.component.css',
})
export class Test3Component {
  @Input({ alias: 'firstName', required: true }) name = 'default';
  @Input({
    required: true,
    transform: (val: 'M' | 'F' | 'O') => {
      if (val === 'F') return 'Feminin';
      if (val === 'M') return 'Masculin';
      return 'Autre';
    },
  })
  sex = '';

  @Input({ transform: booleanAttribute, alias: 'disabled' }) desactive = false;

  @Output() error = new EventEmitter<{ btn: string }>();

  @Output() success = new EventEmitter<{ btn: string }>();

  onError() {
    this.error.emit({ btn: 'error' });
  }
  onSuccess() {
    this.success.emit({ btn: 'success' });
  }
}
