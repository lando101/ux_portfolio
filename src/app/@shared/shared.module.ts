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
import { PositiveNotiComponent } from './components/notifications/positive-noti/positive-noti.component';
import { MobileContactInfoFormComponent } from './components/mobile-contact-info-form/mobile-contact-info-form.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { CertImagesComponent } from './components/cert-images/cert-images.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { NgxVcardModule } from 'ngx-vcard';
import { CaseStudyCardSmComponent } from './components/case-study-card-sm/case-study-card-sm.component';

@NgModule({
  imports: [
    CommonModule,
    NgxVcardModule,
    FlexLayoutModule,
    MomentModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    LoaderComponent,
    InfoCardComponent,
    CaseStudyCardComponent,
    ContactInfoFormComponent,
    TeleInputComponent,
    PositiveNotiComponent,
    MobileContactInfoFormComponent,
    QuotesComponent,
    CertImagesComponent,
    ContactCardComponent,
    CaseStudyCardSmComponent,
  ],
  exports: [
    LoaderComponent,
    InfoCardComponent,
    CaseStudyCardComponent,
    ContactInfoFormComponent,
    MobileContactInfoFormComponent,
    QuotesComponent,
    CertImagesComponent,
    ContactCardComponent,
  ],
})
export class SharedModule {}
