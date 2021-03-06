import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
    { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then((m) => m.ResumeModule) },
    { path: 'coinfloe', loadChildren: () => import('./pages/coinfloe/coinfloe.module').then((m) => m.CoinfloeModule) },
    { path: 'pas', loadChildren: () => import('./pages/pas/pas.module').then((m) => m.PasModule) },
    {
      path: 'forecaster',
      loadChildren: () => import('./pages/forcaster/forcaster.module').then((m) => m.ForcasterModule),
    },
  ]),

  // { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule) },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
