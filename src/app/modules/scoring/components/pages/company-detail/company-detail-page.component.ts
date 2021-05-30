import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * 企業詳細画面
 */
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail-page.component.html',
  styleUrls: ['./company-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailPageComponent implements OnInit {
  public companyId = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('companyId');
  }

  public onClickBack($event) {
    this.router.navigate(['/scoring/list']);
  }
}
