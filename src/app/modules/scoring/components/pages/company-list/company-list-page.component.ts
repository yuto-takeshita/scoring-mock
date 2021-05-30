import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * 企業一覧画面
 */
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list-page.component.html',
  styleUrls: ['./company-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyListPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
