import { Component, OnInit } from '@angular/core';
import { CaseStudy } from '@app/@shared/components/case-study-card/case-study-card.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-g4s',
  templateUrl: './g4s.component.html',
  styleUrls: ['./g4s.component.scss'],
})
export class G4sComponent implements OnInit {
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
  images = [
    `https://ux-portfolio-lcm.s3.amazonaws.com/g4s/personas/marques-persona-saturated.png`,
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/personas/mikayla-persona.png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/personas/jacqueline-persona.png',
  ];
  userFlows = [
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/Create+Citation+Export+(1).png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/Request+New+Source+Export.png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/View+Source+Credibility+Export.png',
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 20000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
