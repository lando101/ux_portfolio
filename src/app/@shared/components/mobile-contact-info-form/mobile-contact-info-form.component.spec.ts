import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContactInfoFormComponent } from './mobile-contact-info-form.component';

describe('MobileContactInfoFormComponent', () => {
  let component: MobileContactInfoFormComponent;
  let fixture: ComponentFixture<MobileContactInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileContactInfoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContactInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
