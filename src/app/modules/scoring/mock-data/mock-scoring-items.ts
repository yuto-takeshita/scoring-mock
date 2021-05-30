import { ScoringItem } from 'src/app/core/models/scoring-item.model';

export const MockScoringItems = [
  // {
  //   category: 'BURDEN',
  //   columnCode: 'CURRENT_DEBT_TO_INCOME',
  //   columnName: '現在の借入負担',
  // },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_CONDITION_LATEST_180',
    columnName: '平均月客数（直近180日）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_CONDITION_LATEST_30',
    columnName: '月客数（直近30日）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_CONDITION_LATEST_365',
    columnName: '平均月客数（直近365日）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_CONDITION_LATEST_7',
    columnName: '日客数合計（直近7日）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_CONDITION_LATEST_90',
    columnName: '平均月客数（直近90日）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_GROWTH_FROM_180',
    columnName: '客数成長率（180日前対）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_GROWTH_FROM_270',
    columnName: '客数成長率（270日前対）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_GROWTH_FROM_30',
    columnName: '客数成長率（30日前対）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_GROWTH_FROM_365',
    columnName: '客数成長率（昨対）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_GROWTH_FROM_90',
    columnName: '客数成長率（90日前対）',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_KEEP_GOOD_CONDITION',
    columnName: '客数上昇後の維持',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_STABILITY',
    columnName: '客数の推移の安定',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_SUDDEN_FALL_PAST',
    columnName: '急激に客数が下落した時期の有無',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_SUDDEN_FALL_RECENTLY',
    columnName: '直近の急激な客数下落の有無',
  },
  {
    category: 'CUSTOMER_COUNT',
    columnCode: 'CUSTOMERS_TREND',
    columnName: '客数の伸びの傾向',
  },
  {
    category: 'RELIABILITY',
    columnCode: 'ESTABLISHED_YEARS',
    columnName: '業歴',
  },
  {
    category: 'PROFITS',
    columnCode: 'FOOD_DRINK_COST_RATE',
    columnName: 'FD比率',
  },
  {
    category: 'PROFITS',
    columnCode: 'FOOD_LABOR_COST_RATE',
    columnName: 'FL比率',
  },
  {
    category: 'BURDEN',
    columnCode: 'LOAN_TO_MONTHLY_SALES',
    columnName: '借入金月商倍率',
  },
  {
    category: 'PROFITS',
    columnCode: 'PERSONAL_COST_RATE',
    columnName: '人件費率',
  },
  {
    category: 'SALES',
    columnCode: 'PRICE_PER_CUSTOMER_GROWTH_FROM_365',
    columnName: '月客単価成長率（昨対）',
  },
  {
    category: 'PROFITS',
    columnCode: 'PURCHASE_COST_RATE',
    columnName: '原価率',
  },
  {
    category: 'PROFITS',
    columnCode: 'PURCHASE_COST_RATE_OF_SUPERIORS',
    columnName: 'A商品の原価率',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_CONDITION_LATEST_180',
    columnName: '平均月商（直近180日）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_CONDITION_LATEST_30',
    columnName: '月商（直近30日）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_CONDITION_LATEST_365',
    columnName: '平均月商（直近365日）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_CONDITION_LATEST_7',
    columnName: '日商合計（直近7日）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_CONDITION_LATEST_90',
    columnName: '平均月商（直近90日）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_GROWTH_FROM_180',
    columnName: '売上成長率（180日前対）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_GROWTH_FROM_270',
    columnName: '売上成長率（270日前対）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_GROWTH_FROM_30',
    columnName: '売上成長率（30日前対）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_GROWTH_FROM_365',
    columnName: '売上成長率（昨対）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_GROWTH_FROM_90',
    columnName: '売上成長率（90日前対）',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_KEEP_GOOD_CONDITION',
    columnName: '売上上昇後の維持',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_STABILITY',
    columnName: '売上の推移の安定',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_SUDDEN_FALL_PAST',
    columnName: '急激に売上が下落した時期の有無',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_SUDDEN_FALL_RECENTLY',
    columnName: '直近の急激な売上下落の有無',
  },
  {
    category: 'SALES',
    columnCode: 'SALES_TREND',
    columnName: '売上の伸びの傾向',
  },
  {
    category: 'RELIABILITY',
    columnCode: 'STOCK_LISTING_CATEGORY',
    columnName: '上場区分',
  },
] as ScoringItem[];
