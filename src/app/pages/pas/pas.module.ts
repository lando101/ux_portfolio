import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasRoutingModule } from './pas-routing.module';
import { PasComponent } from './pas.component';

@NgModule({
  declarations: [PasComponent],
  imports: [CommonModule, PasRoutingModule],
})
export class PasModule {}
