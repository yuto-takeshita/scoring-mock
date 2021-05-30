import { Injectable } from '@angular/core';
import { isNil as _isNil } from 'lodash';
import { CompanyScoreDetail } from 'src/app/core/models/company-score-detail.model';
import { MockScoreDetails } from '../mock-data/mock-score-details';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor() {}

  public getDetail(companyCode: string): CompanyScoreDetail[] {
    return MockScoreDetails;
  }
}
