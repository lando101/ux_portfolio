import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G4sComponent } from './g4s.component';

describe('G4sComponent', () => {
  let component: G4sComponent;
  let fixture: ComponentFixture<G4sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [G4sComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G4sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
