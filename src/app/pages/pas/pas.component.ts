import { Component, OnInit, ViewChild } from '@angular/core';
import { CaseStudy } from '@app/@shared/components/case-study-card/case-study-card.component';
import {
  PerfectScrollbarComponent,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss'],
})
export class PasComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'https://ux-portfolio-lcm.s3.amazonaws.com/opas/visualizations/Tech_Savvy.png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/opas/visualizations/Org_Expert.png',
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'G4S Sources',
      desc: 'A sources management application that aggregates sources, standardizes citations, automates source packets and more.',
      skills: ['UX/UI Design', 'UX Research', 'UI/Front-End Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/general/g4s_transparent.png',
      href: '/projects/g4s',
      orientation: 'right',
      alt: 'Image of process automation application on desktop in light and dark mode',
      nda: true,
      caseStudy: true,
      public: true,
    },
    {
      title: 'Coinfloe',
      desc: 'A full-featured crypto currency web application built for exploring the crypto landscape.',
      skills: ['UX/UI Design', 'UI/Front-End Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/coinfloe/general/coinfloe_ad_transparent_no_tilt.png',
      href: '/projects/coinfloe',
      orientation: 'left',
      alt: 'Image of coinfloe application on desktop and mobile',
      nda: false,
      caseStudy: true,
      public: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    document.getElementById('intro').focus();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
