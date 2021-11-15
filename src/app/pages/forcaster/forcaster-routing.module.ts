import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ForcasterComponent } from './forcaster.component';

const routes: Routes = [{ path: '', component: ForcasterComponent, data: { title: marker('Landon UX') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcasterRoutingModule {}
