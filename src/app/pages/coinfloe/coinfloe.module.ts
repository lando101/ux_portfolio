import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinfloeRoutingModule } from './coinfloe-routing.module';
import { CoinfloeComponent } from './coinfloe.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '@app/directives/directives.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CoinfloeComponent],
  imports: [CommonModule, CoinfloeRoutingModule, FlexLayoutModule, NgbModule, DirectivesModule],
})
export class CoinfloeModule {}
