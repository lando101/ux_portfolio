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
    'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2FTech_Savvy.png?alt=media&token=50ad5d91-9281-4e77-9567-f3b64fae5c9c',
    'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2FOrg_Expert.png?alt=media&token=a2b76579-a004-404e-a5e1-217654329e61',
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
