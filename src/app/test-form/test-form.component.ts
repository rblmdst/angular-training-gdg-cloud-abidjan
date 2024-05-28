import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: ` <input type="text" [formControl]="nameCtrl" />
    <button [disabled]="nameCtrl.invalid">Recherche</button>
    <div *ngIf="nameCtrl.errors && nameCtrl.dirty" style="color: red;">
      <p *ngIf="nameCtrl.hasError('required')">Le champ est requis</p>
      <p *ngIf="nameCtrl.hasError('minlength')">Minimum 5 caractères</p>
    </div>
    <div>Name : {{ nameCtrl.value }}</div>`,
  styleUrl: './test-form.component.css',
})
export class TestFormComponent {
  nameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  constructor() {
    this.nameCtrl.setValue('');
    // this.nameCtrl.disable();
    // console.log(' VAL ', this.nameCtrl.getRawValue());

    this.nameCtrl.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed())
      .subscribe({
        next: (value) => {
          console.log(this.nameCtrl);
        },
      });

    this.nameCtrl.statusChanges.pipe(takeUntilDestroyed()).subscribe({
      next: (status) => {
        console.log({ status });
      },
    });
  }
}
