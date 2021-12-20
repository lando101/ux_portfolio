import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasRoutingModule } from './pas-routing.module';
import { PasComponent } from './pas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivesModule } from '@app/directives/directives.module';

@NgModule({
  declarations: [PasComponent],
  imports: [CommonModule, PasRoutingModule, FlexLayoutModule, NgbModule, DirectivesModule],
})
export class PasModule {}
