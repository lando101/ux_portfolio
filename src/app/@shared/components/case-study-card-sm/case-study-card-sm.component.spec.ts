import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyCardSmComponent } from './case-study-card-sm.component';

describe('CaseStudyCardSmComponent', () => {
  let component: CaseStudyCardSmComponent;
  let fixture: ComponentFixture<CaseStudyCardSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudyCardSmComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyCardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
