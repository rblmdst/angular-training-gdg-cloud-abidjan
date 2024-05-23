import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactPageComponent } from './edit-contact-page.component';

describe('EditContactPageComponent', () => {
  let component: EditContactPageComponent;
  let fixture: ComponentFixture<EditContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditContactPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
