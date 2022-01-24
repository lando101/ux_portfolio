import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageViewerComponent } from './large-image-viewer.component';

describe('LargeImageViewerComponent', () => {
  let component: LargeImageViewerComponent;
  let fixture: ComponentFixture<LargeImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeImageViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
