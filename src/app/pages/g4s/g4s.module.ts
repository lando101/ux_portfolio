import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G4sRoutingModule } from './g4s-routing.module';
import { G4sComponent } from './g4s.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '@app/directives/directives.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [G4sComponent],
  imports: [CommonModule, G4sRoutingModule, FlexLayoutModule, NgbModule, DirectivesModule],
})
export class G4sModule {}