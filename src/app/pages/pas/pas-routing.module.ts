import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { PasComponent } from './pas.component';

const routes: Routes = [{ path: '', component: PasComponent, data: { title: marker('Landon UX') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasRoutingModule {}
