import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveNotiComponent } from './positive-noti.component';

describe('PositiveNotiComponent', () => {
  let component: PositiveNotiComponent;
  let fixture: ComponentFixture<PositiveNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositiveNotiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
