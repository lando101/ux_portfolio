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
    'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2FTech_Savvy.png?alt=media&token=0cc0af7d-8591-4970-9b3c-4b2707c5dd1a',
    'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2FOrg_Expert.png?alt=media&token=77b50d1c-51ac-4bf1-a6ab-c196fa340adb',
  ];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
