import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ForcasterComponent } from './forcaster.component';

const routes: Routes = [{ path: 'forecaster', component: ForcasterComponent, data: { title: marker('Forecaster') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcasterRoutingModule {}
