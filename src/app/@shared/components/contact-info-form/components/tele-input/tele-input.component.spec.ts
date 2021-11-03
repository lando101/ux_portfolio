import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleInputComponent } from './tele-input.component';

describe('TeleInputComponent', () => {
  let component: TeleInputComponent;
  let fixture: ComponentFixture<TeleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeleInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
