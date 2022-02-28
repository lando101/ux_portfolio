import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { G4sComponent } from './g4s.component';

// const routes: Routes = [{ path: '', component: G4sComponent }];
const routes: Routes = [{ path: '', component: G4sComponent, data: { title: marker('Landon UX') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class G4sRoutingModule {}
