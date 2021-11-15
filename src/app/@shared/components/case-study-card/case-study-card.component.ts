import { Component, Input, OnInit } from '@angular/core';
export interface CaseStudy {
  title: string;
  desc: string;
  skills: string[];
  img_url: string;
  href: string;
  orientation: string;
  alt: string;
  nda?: boolean;
  caseStudy: boolean;
}
@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.component.html',
  styleUrls: ['./case-study-card.component.scss'],
})
export class CaseStudyCardComponent implements OnInit {
  @Input() caseStudy: CaseStudy;
  constructor() {}

  ngOnInit(): void {}
}
