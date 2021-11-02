import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    FlexLayoutModule,
    AnimateOnScrollModule.forRoot(),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
