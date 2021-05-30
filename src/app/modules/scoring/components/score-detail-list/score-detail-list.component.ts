import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Company } from 'src/app/core/models/company.model';
import { CompanyService } from '../../services/company.service';

/**
 * 企業一覧
 */
@Component({
  selector: 'score-detail-list',
  templateUrl: './score-detail-list.component.html',
  styleUrls: ['./score-detail-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreDetailListComponent implements OnInit {
  public companies: Company[];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies = this.companyService.getList();
  }
}
