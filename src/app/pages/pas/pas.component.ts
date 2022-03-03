import { Component, OnInit, ViewChild } from '@angular/core';
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
