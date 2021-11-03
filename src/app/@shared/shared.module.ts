import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MomentModule } from 'ngx-moment';
import { ReactiveFormsModule } from '@angular/forms';

import { CaseStudyCardComponent } from './components/case-study-card/case-study-card.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { TeleInputComponent } from './components/contact-info-form/components/tele-input/tele-input.component';
import { MaterialModule } from '@app/material/material.module';
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MomentModule, RouterModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    LoaderComponent,
    InfoCardComponent,
    CaseStudyCardComponent,
    ContactInfoFormComponent,
    TeleInputComponent,
  ],
  exports: [LoaderComponent, InfoCardComponent, CaseStudyCardComponent, ContactInfoFormComponent],
})
export class SharedModule {}
