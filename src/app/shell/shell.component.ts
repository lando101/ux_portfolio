import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '@app/services/image-service.service';
import { fadeInUp, fadeOutDown } from 'ng-animate';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('fadeOutUp', [
      transition(':enter', [
        useAnimation(fadeInUp, {
          params: {
            timing: 0.12,
            a: '10px',
            b: '0px',
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(fadeOutDown, {
          params: {
            timing: 0.1,
            a: '0px',
            b: '20px',
          },
        }),
      ]),
    ]),
  ],
})
export class ShellComponent implements OnInit {
  mobile: boolean = false;
  lastPosition: 0;
  scrollUp: boolean = true;
  constructor(private imgService: ImageService, private deviceService: DeviceDetectorService, private router: Router) {}
  imgLoading: number = null;

  ngOnInit() {
    this.mobile = this.deviceService.isMobile();
    console.log('mobile', this.mobile);
    this.imgService.imagesLoading$.subscribe((count: number) => {
      console.log('count', count);
      if (count === 0) {
        setTimeout(() => {
          this.imgLoading = count;
        }, 800);
      } else {
        this.imgLoading = count;
      }
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (!this.mobile) {
      this.router.events.subscribe((val) => {
        // console.log('router',val);
        this.scrollReset();
      });
    }
  }

  onScroll(event: any) {
    // console.log('scroll', event.target.scrollTop);
    const position = event.target.scrollTop;
    if (position > this.lastPosition) {
      // scroll down :: hide header
      if (position - this.lastPosition > 5) {
        this.scrollUp = false;
      }
    } else {
      // scroll up
      this.scrollUp = true;
    }
    // console.log('up', this.scrollUp);
    this.lastPosition = position;
  }

  scrollReset() {
    // console.log('TRYING TO SCROLL TOP');
    const doc = document.getElementById('container');
    doc.scrollTo(0, 0);
  }
}
