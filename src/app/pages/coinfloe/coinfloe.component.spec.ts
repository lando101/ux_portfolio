import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinfloeComponent } from './coinfloe.component';

describe('CoinfloeComponent', () => {
  let component: CoinfloeComponent;
  let fixture: ComponentFixture<CoinfloeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinfloeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinfloeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
