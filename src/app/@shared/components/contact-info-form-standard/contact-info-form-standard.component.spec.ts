import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoFormStandardComponent } from './contact-info-form-standard.component';

describe('ContactInfoFormStandardComponent', () => {
  let component: ContactInfoFormStandardComponent;
  let fixture: ComponentFixture<ContactInfoFormStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInfoFormStandardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoFormStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
