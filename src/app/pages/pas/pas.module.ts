import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasRoutingModule } from './pas-routing.module';
import { PasComponent } from './pas.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PasComponent],
  imports: [CommonModule, PasRoutingModule, FlexLayoutModule],
})
export class PasModule {}
