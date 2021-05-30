export class CompanyPerformance {
  data: {
    // 時点
    timePoint: string;
    values: {
      // 売上
      sales: number;
      // 客数
      customerCount: number;
      // 店舗数
      storeCount: number;
    };
  }[];
}
