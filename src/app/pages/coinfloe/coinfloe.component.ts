import { Component, OnInit } from '@angular/core';
import { CaseStudy } from '@app/@shared/components/case-study-card/case-study-card.component';

@Component({
  selector: 'app-coinfloe',
  templateUrl: './coinfloe.component.html',
  styleUrls: ['./coinfloe.component.scss'],
})
export class CoinfloeComponent implements OnInit {
  fontFamily = "'Manrope', sans-serif";
  fontName = 'Manrope';
  caseStudies: CaseStudy[] = [
    {
      title: 'OPAS Portal',
      desc: 'An enterprise grade application for managing workflows for a user based of over 5,000 users.',
      skills: ['UX/UI Design', 'UX Research', 'UI Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/opas/general/opas-transparent-no-tilt.png',
      href: '/projects/pas',
      orientation: 'right',
      alt: 'Image of process automation application on desktop in light and dark mode',
      nda: true,
      caseStudy: true,
      public: true,
    },
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
