import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-g4s',
  templateUrl: './g4s.component.html',
  styleUrls: ['./g4s.component.scss'],
})
export class G4sComponent implements OnInit {
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
