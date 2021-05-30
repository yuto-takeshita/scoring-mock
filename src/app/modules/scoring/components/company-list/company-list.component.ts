import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/core/models/company.model';
import { CompanyService } from '../../services/company.service';

/**
 * 企業一覧
 */
@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyListComponent implements OnInit {
  public companies: Company[];
  public columns: { header: string; field: string }[];
  // ソートフィールド
  public currentSortField = null;
  // ソート基準
  public currentSortOrder = null;

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.columns = [
      { header: '企業コード', field: 'companyCode' },
      { header: '企業名', field: 'companyName' },
      { header: '設立年月日', field: 'establishmentDate' },
      { header: '上場区分', field: 'stockMarket' },
      { header: '業態', field: 'businessCategory' },
      { header: 'スコア', field: 'score' },
      { header: 'ランク', field: 'rank' },
    ];
    this.companies = this.companyService.getList();
  }

  columnSort(event: any) {
    // ソートフィールド名を取得
    if (event.field && event.order) {
      this.currentSortField = event.field;
      this.currentSortOrder = event.order;
      event.data.sort((data1, data2) => {
        const value1 = data1[event.field].val;
        const value2 = data2[event.field].val;
        let result = null;

        if (value1 == null && value2 != null) {
          result = -1;
        } else if (value1 != null && value2 == null) {
          result = 1;
        } else if (value1 == null && value2 == null) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        }
        return event.order * result;
      });
    }
  }

  public onClickCompanyRow(companyCode: string): void {
    this.router.navigate([`/scoring/detail/${companyCode}}`]);
  }
}
