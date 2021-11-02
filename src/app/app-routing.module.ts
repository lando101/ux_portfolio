import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
    { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then((m) => m.ResumeModule) },
  ]),
  // { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule) },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
