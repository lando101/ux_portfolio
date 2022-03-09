import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyCardMiniComponent } from './case-study-card-mini.component';

describe('CaseStudyCardMiniComponent', () => {
  let component: CaseStudyCardMiniComponent;
  let fixture: ComponentFixture<CaseStudyCardMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudyCardMiniComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
