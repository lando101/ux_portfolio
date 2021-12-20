import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@app/material/material.module';
import { ImgDirective } from '@app/directives/img.directive';
import { DirectivesModule } from '@app/directives/directives.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, FlexLayoutModule, NgbModule, MaterialModule, DirectivesModule],
})
export class ResumeModule {}
