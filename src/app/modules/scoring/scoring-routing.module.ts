import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailPageComponent } from './components/pages/company-detail/company-detail-page.component';
import { CompanyListPageComponent } from './components/pages/company-list/company-list-page.component';
import { ScoringComponent } from './scoring.component';

const routes: Routes = [
  {
    path: '',
    component: ScoringComponent,
    children: [
      {
        path: 'list',
        component: CompanyListPageComponent,
      },
      { path: 'detail/:companyId', component: CompanyDetailPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoringRoutingModule {}
