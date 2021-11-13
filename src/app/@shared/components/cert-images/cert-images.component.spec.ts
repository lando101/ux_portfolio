import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertImagesComponent } from './cert-images.component';

describe('CertImagesComponent', () => {
  let component: CertImagesComponent;
  let fixture: ComponentFixture<CertImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertImagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
