import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MomentModule } from 'ngx-moment';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MomentModule],
  declarations: [LoaderComponent, InfoCardComponent],
  exports: [LoaderComponent, InfoCardComponent],
})
export class SharedModule {}
