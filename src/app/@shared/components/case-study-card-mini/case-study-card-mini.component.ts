import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseStudy } from '../case-study-card/case-study-card.component';

@Component({
  selector: 'app-case-study-card-mini',
  templateUrl: './case-study-card-mini.component.html',
  styleUrls: ['./case-study-card-mini.component.scss'],
})
export class CaseStudyCardMiniComponent implements OnInit {
  @Input() caseStudy: CaseStudy;
  @Input() showMore: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  route(url: string) {
    this.router.navigateByUrl(url);
  }
}
