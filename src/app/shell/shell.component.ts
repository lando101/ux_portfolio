import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '@app/services/image-service.service';
import { fadeInUp, fadeOutDown } from 'ng-animate';
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
  constructor(private imgService: ImageService) {}
  imgLoading: number = null;

  ngOnInit() {
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
}
