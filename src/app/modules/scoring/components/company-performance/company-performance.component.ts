import {
  Component,
  OnInit,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { AsCurrencyPipe } from 'src/app/core/pipes/as-currency';
import { AsPeopleCountPipe } from 'src/app/core/pipes/as-people-count';
import { AsStoreCountPipe } from 'src/app/core/pipes/as-store-count';
import { CompanyPerformanceService } from '../../services/company-performance.service';
HighchartsMore(Highcharts);
import * as syncCharts from './sync-addition';
syncCharts.syncChartsInit(Highcharts);

const ChartStyle = {
  common: {
    height: 312,
    marginLeft: 80,
    spacingTop: 20,
    spacingBottom: 20,
    fontFamily: 'Hiragino Sans, メイリオ, Meiryo',
    fontColor: '#565e65',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  yAxis: {
    fontSize: '12px',
    fontWeight: 'normal',
  },
  tooltip: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
};

@Component({
  selector: 'app-company-performance',
  templateUrl: './company-performance.component.html',
  styleUrls: ['./company-performance.component.scss'],
})
export class CompanyPerformanceComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;
  protected chart: Highcharts.Chart;
  chartConstructor = 'chart';
  public salesChartOption: Highcharts.Options;
  public customerCountChartOption: Highcharts.Options;
  public storeCountChartOption: Highcharts.Options;
  public chartCallback: Highcharts.ChartCallbackFunction;
  public updateFlag = true;

  constructor(private CompanyPerformanceService: CompanyPerformanceService) {}

  ngOnInit(): void {
    this.createTransitionChart();
  }

  protected createTransitionChart(): any {
    const self = this;
    const activity = this.CompanyPerformanceService.getTransition();
    this.chartCallback = (chart) => {
      self.chart = chart;
    };

    const xCategories: string[] = [];
    const salesSeries: number[] = [];
    const customerCountSeries: number[] = [];
    const storeCountSeries: number[] = [];
    activity.data.forEach((e) => {
      xCategories.push(e.timePoint);
      salesSeries.push(e.values.sales);
      customerCountSeries.push(e.values.customerCount);
      storeCountSeries.push(e.values.storeCount);
    });

    this.salesChartOption = {
      chart: {
        marginLeft: ChartStyle.common.marginLeft,
        spacingTop: ChartStyle.common.spacingTop,
        spacingBottom: ChartStyle.common.spacingBottom,
        height: ChartStyle.common.height,
      },
      title: {
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.title.fontSize,
          fontWeight: ChartStyle.title.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
        text: '売上実績',
        align: 'center',
        margin: 0,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2,
          },
        },
        series: {
          marker: {
            enabled: true,
          },
          animation: false,
        },
      },
      xAxis: {
        categories: xCategories,
        crosshair: true,
        events: {
          setExtremes: (e) => {
            const thisChart = this.chart;
            if (e.trigger !== 'syncExtremes') {
              Highcharts.charts.forEach((chart) => {
                if (chart !== thisChart) {
                  if (chart.xAxis[0].setExtremes) {
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                      trigger: 'syncExtremes',
                    });
                  }
                }
              });
            }
          },
        },
        labels: {
          format: '{value}週',
        },
      },
      yAxis: {
        labels: {
          style: {
            color: ChartStyle.common.fontColor,
            fontSize: ChartStyle.yAxis.fontSize,
            fontWeight: ChartStyle.yAxis.fontWeight,
            fontFamily: ChartStyle.common.fontFamily,
          },
          formatter() {
            return new AsCurrencyPipe().transform(this.value, true);
          },
        },
        title: {
          text: null,
        },
      },
      tooltip: {
        positioner() {
          return {
            x: this.chart.chartWidth - this.getLabel().getBBox().width,
            y: 10,
          };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        formatter() {
          return (
            this.key +
            '週: ' +
            new AsCurrencyPipe().transform(this.point.y, false)
          );
        },
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.tooltip.fontSize,
          fontWeight: ChartStyle.tooltip.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
      },
      series: [
        {
          data: salesSeries,
          name: '売上実績',
          type: 'area',
          color: Highcharts.getOptions().colors[0],
          fillOpacity: 0.3,
        },
      ],
    };

    this.customerCountChartOption = {
      chart: {
        marginLeft: ChartStyle.common.marginLeft,
        spacingTop: ChartStyle.common.spacingTop,
        spacingBottom: ChartStyle.common.spacingBottom,
        height: ChartStyle.common.height,
      },
      title: {
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.title.fontSize,
          fontWeight: ChartStyle.title.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
        text: '客数',
        align: 'center',
        margin: 0,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2,
          },
        },
        series: {
          marker: {
            enabled: true,
          },
          animation: false,
        },
      },
      xAxis: {
        categories: xCategories,
        crosshair: true,
        events: {
          setExtremes: (e) => {
            const thisChart = this.chart;
            if (e.trigger !== 'syncExtremes') {
              Highcharts.charts.forEach((chart) => {
                if (chart !== thisChart) {
                  if (chart.xAxis[0].setExtremes) {
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                      trigger: 'syncExtremes',
                    });
                  }
                }
              });
            }
          },
        },
        labels: {
          format: '{value}週',
        },
      },
      yAxis: {
        labels: {
          style: {
            color: ChartStyle.common.fontColor,
            fontSize: ChartStyle.yAxis.fontSize,
            fontWeight: ChartStyle.yAxis.fontWeight,
            fontFamily: ChartStyle.common.fontFamily,
          },
          formatter() {
            return new AsPeopleCountPipe().transform(this.value, true);
          },
        },
        title: {
          text: null,
        },
      },
      tooltip: {
        positioner() {
          return {
            x: this.chart.chartWidth - this.getLabel().getBBox().width,
            y: 10,
          };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        formatter() {
          return (
            this.key +
            '週: ' +
            new AsPeopleCountPipe().transform(this.point.y, false)
          );
        },
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.tooltip.fontSize,
          fontWeight: ChartStyle.tooltip.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
      },
      series: [
        {
          data: customerCountSeries,
          name: '客数',
          type: 'area',
          color: Highcharts.getOptions().colors[1],
          fillOpacity: 0.3,
        },
      ],
    };

    this.storeCountChartOption = {
      chart: {
        marginLeft: ChartStyle.common.marginLeft,
        spacingTop: ChartStyle.common.spacingTop,
        spacingBottom: ChartStyle.common.spacingBottom,
        height: ChartStyle.common.height,
      },
      title: {
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.title.fontSize,
          fontWeight: ChartStyle.title.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
        text: '店舗数',
        align: 'center',
        margin: 0,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2,
          },
        },
        series: {
          marker: {
            enabled: true,
          },
          animation: false,
        },
      },
      xAxis: {
        categories: xCategories,
        crosshair: true,
        events: {
          setExtremes: (e) => {
            const thisChart = this.chart;
            if (e.trigger !== 'syncExtremes') {
              Highcharts.charts.forEach((chart) => {
                if (chart !== thisChart) {
                  if (chart.xAxis[0].setExtremes) {
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                      trigger: 'syncExtremes',
                    });
                  }
                }
              });
            }
          },
        },
        labels: {
          format: '{value}週',
        },
      },
      yAxis: {
        labels: {
          style: {
            color: ChartStyle.common.fontColor,
            fontSize: ChartStyle.yAxis.fontSize,
            fontWeight: ChartStyle.yAxis.fontWeight,
            fontFamily: ChartStyle.common.fontFamily,
          },
          formatter() {
            return new AsStoreCountPipe().transform(this.value, true);
          },
        },
        title: {
          text: null,
        },
      },
      tooltip: {
        positioner() {
          return {
            x: this.chart.chartWidth - this.getLabel().getBBox().width,
            y: 10,
          };
        },
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        formatter() {
          return (
            this.key +
            '週: ' +
            new AsStoreCountPipe().transform(this.point.y, false)
          );
        },
        style: {
          color: ChartStyle.common.fontColor,
          fontSize: ChartStyle.tooltip.fontSize,
          fontWeight: ChartStyle.tooltip.fontWeight,
          fontFamily: ChartStyle.common.fontFamily,
        },
      },
      series: [
        {
          data: storeCountSeries,
          name: '店舗数',
          type: 'area',
          color: Highcharts.getOptions().colors[2],
          fillOpacity: 0.3,
        },
      ],
    };
  }

  public addHighlight(e) {
    let chart;
    let point;
    let i;
    let event;

    for (i = 0; i < Highcharts.charts.length; i = i + 1) {
      chart = Highcharts.charts[i];
      if (chart) {
        event = chart.pointer.normalize(e);
        point = chart.series[0].searchPoint(event, true);
        if (point) {
          point.highlight(e);
        }
      }
    }
  }
}
