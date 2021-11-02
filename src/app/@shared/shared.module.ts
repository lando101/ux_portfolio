import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MomentModule } from 'ngx-moment';
import { CaseStudyCardComponent } from './components/case-study-card/case-study-card.component';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MomentModule],
  declarations: [LoaderComponent, InfoCardComponent, CaseStudyCardComponent],
  exports: [LoaderComponent, InfoCardComponent, CaseStudyCardComponent],
})
export class SharedModule {}
