import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScoringRoutingModule } from './scoring-routing.module';
import { ScoringComponent } from './scoring.component';
import { CompanyListPageComponent } from './components/pages/company-list/company-list-page.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailPageComponent } from './components/pages/company-detail/company-detail-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnersModule } from 'ngx-spinners';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContentsTitleComponent } from './components/contents-title/contents-title.component';
import { ScoreDetailListComponent } from './components/score-detail-list/score-detail-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { CompanyPerformanceComponent } from './components/company-performance/company-performance.component';
import { CompanyScoreComponent } from './components/company-score/company-score.component';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';
import { RatingModule } from 'ng-starrating';
import { ScoreDetailDialog } from './components/dialogs/score-detail/score-detail-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ScoringComponent,
    CompanyListPageComponent,
    CompanyListComponent,
    CompanyDetailPageComponent,
    ContentsTitleComponent,
    ScoreDetailListComponent,
    CompanyOverviewComponent,
    CompanyScoreComponent,
    CompanyPerformanceComponent,
    ScoreDetailDialog,
  ],
  imports: [
    CoreModule,
    CommonModule,
    ScoringRoutingModule,
    RouterModule,
    HighchartsChartModule,
    HttpClientModule,
    NgxSpinnersModule,
    RatingModule,
  ],
  entryComponents: [ScoreDetailDialog],
})
export class ScoringModule {}
