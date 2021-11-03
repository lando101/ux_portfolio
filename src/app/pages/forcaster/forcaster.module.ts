import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForcasterRoutingModule } from './forcaster-routing.module';
import { ForcasterComponent } from './forcaster.component';

@NgModule({
  declarations: [ForcasterComponent],
  imports: [CommonModule, ForcasterRoutingModule],
})
export class ForcasterModule {}
