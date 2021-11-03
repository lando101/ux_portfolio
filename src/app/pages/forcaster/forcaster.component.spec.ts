import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcasterComponent } from './forcaster.component';

describe('ForcasterComponent', () => {
  let component: ForcasterComponent;
  let fixture: ComponentFixture<ForcasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForcasterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
