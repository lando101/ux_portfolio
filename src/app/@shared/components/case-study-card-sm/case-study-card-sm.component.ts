import { Component, Input, OnInit } from '@angular/core';
import { CaseStudy } from '../case-study-card/case-study-card.component';

@Component({
  selector: 'app-case-study-card-sm',
  templateUrl: './case-study-card-sm.component.html',
  styleUrls: ['./case-study-card-sm.component.scss'],
})
export class CaseStudyCardSmComponent implements OnInit {
  @Input() caseStudy: CaseStudy;
  constructor() {}

  ngOnInit(): void {}
}
