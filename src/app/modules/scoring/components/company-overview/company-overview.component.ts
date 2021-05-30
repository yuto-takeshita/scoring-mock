import {
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss'],
})
export class CompanyOverviewComponent implements OnInit {
  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.createChartOptions();
  }

  /**
   * グラフの各値を設定する
   */
  protected createChartOptions(): any {}
}
