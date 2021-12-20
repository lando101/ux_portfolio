import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageService } from '@app/services/image-service.service';

@Directive({
  selector: 'img',
})
export class ImgDirective {
  constructor(private el: ElementRef, private imageService: ImageService) {
    imageService.imageLoading(el.nativeElement);
  }

  @HostListener('load')
  onLoad() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
    // console.log('loading image');
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }
}
