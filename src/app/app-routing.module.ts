import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginPageComponent } from './modules/login/components/pages/login/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'scoring',
    loadChildren: () =>
      import('./modules/scoring/scoring.module').then((m) => m.ScoringModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
