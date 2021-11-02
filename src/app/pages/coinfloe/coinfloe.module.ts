import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinfloeRoutingModule } from './coinfloe-routing.module';
import { CoinfloeComponent } from './coinfloe.component';

@NgModule({
  declarations: [CoinfloeComponent],
  imports: [CommonModule, CoinfloeRoutingModule],
})
export class CoinfloeModule {}
