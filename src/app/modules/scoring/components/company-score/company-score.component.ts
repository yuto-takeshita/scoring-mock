import { Component, Input, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { ScoreService } from '../../services/score.service';
import { ScoringItemService } from '../../services/scoring-item.service';
import {
  ScoreDetailDialog,
  ScoreDetailDialogInterface,
} from '../dialogs/score-detail/score-detail-dialog.component';
HighchartsMore(Highcharts);

@Component({
  selector: 'app-company-score',
  templateUrl: './company-score.component.html',
  styleUrls: ['./company-score.component.scss'],
})
export class CompanyScoreComponent implements OnInit {
  @Input() companyCode: string;
  public Highcharts: typeof Highcharts = Highcharts;
  protected chart: Highcharts.Chart;
  public chartOptions: Highcharts.Options;
  public chartCallback: Highcharts.ChartCallbackFunction;
  public updateFlag: boolean = true;
  private detailDialogData: ScoreDetailDialogInterface[];

  constructor(
    private dialog: MatDialog,
    private scoringItemService: ScoringItemService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.createChartOptions();
    this.createDetailInterface();
  }

  /**
   * グラフの各値を設定する
   */
  protected createChartOptions(): any {
    // 普遍のグラフ設定
    const self = this;
    this.chartOptions = {
      chart: {
        polar: true,
        type: 'line',
        width: 280,
        height: 280,
      },
      title: {
        text: '',
      },
      xAxis: {
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
          align: 'center',
        },
        categories: ['売上', '客数', '信頼性', '成長性', '収益率'],
      },
      credits: {
        enabled: false,
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          animation: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        area: {
          marker: {
            radius: 2,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [
        {
          type: 'area',
          name: 'スコア',
          color: '#ffd900',
          fillOpacity: 0.3,
          data: [19.0, 18.2, 13.6, 15.1, 17.5],
          pointPlacement: 'on',
        },
      ],
    };
  }

  private createDetailInterface() {
    this.scoringItemService
      .getList()
      .toPromise()
      .then((items) => {
        const details = this.scoreService.getDetail(this.companyCode);
        this.detailDialogData = details.map((detail) => {
          return {
            columnName: items.find(
              (item) => item.columnCode === detail.columnCode
            ).columnName,
            score: detail.score,
            rank: this.judgeRank(detail.score, detail.max),
          };
        });
      });
  }

  private judgeRank(score: number, maxScore: number) {
    if (score / maxScore > 0.7) {
      return 'A';
    } else if (score / maxScore > 0.4) {
      return 'B';
    } else {
      return 'C';
    }
  }

  public onClickDetail() {
    this.openDetail(false);
  }

  private openDetail(disableClose: boolean) {
    // ダイアログをオープン
    const ref = this.dialog.open(ScoreDetailDialog, {
      width: 'auto',
      height: 'auto',
      data: this.detailDialogData,
      disableClose,
      panelClass: 'score-detail-dialog',
    });
    // ダイアログクローズを監視
    ref.afterClosed().subscribe((res) => {
      return;
    });
  }
}
