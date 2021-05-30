import { CompanyScoreDetail } from './company-score-detail.model';

export class CompanyScore {
  // 企業コード
  companyCode: string;
  // スコア
  score: number;
  // スコアリング実施日
  execDate: Date;
  // 詳細
  details?: CompanyScoreDetail[];
}
