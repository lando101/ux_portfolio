import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-g4s',
  templateUrl: './g4s.component.html',
  styleUrls: ['./g4s.component.scss'],
})
export class G4sComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  userFlows = [
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/Create+Citation+Export+(1).png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/Request+New+Source+Export.png',
    'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/user-flows/View+Source+Credibility+Export.png',
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 20000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
