import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@app/material/material.module';
import { NgxVcardModule } from 'ngx-vcard';
import { ImgDirective } from '@app/directives/img.directive';
import { DirectivesModule } from '@app/directives/directives.module';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgxVcardModule,
    DirectivesModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
