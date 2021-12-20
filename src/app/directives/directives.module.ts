import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDirective } from './img.directive';

@NgModule({
  declarations: [ImgDirective],
  exports: [ImgDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
