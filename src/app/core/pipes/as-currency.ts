import { Pipe, PipeTransform } from '@angular/core';
import { isNil as _isNil, isNumber as _isNumber } from 'lodash';

/**
 * 数値を通貨表記に変換するパイプ
 */
@Pipe({
  name: 'asCurrency',
  pure: false
})
export class AsCurrencyPipe implements PipeTransform {
  transform(value, hasEllipsis): any {
    let target: number;
    if (_isNumber(value)) {
      target = value;
    } else {
      target = Number(value);
    }

    let ret = '';
    if (!_isNil(target)) {
      target = Math.round(target);
      if (!hasEllipsis || (target < 1000 && target > -1000)) {
        ret = this.createThousandSeparator(target);
      } else {
        // 4桁以上の数値に対し、千の位以下を省略する
        // 例）10000 → 10千, 10K
        target = Math.round(target / 1000);
        ret = this.createThousandSeparator(target) + '千';
      }
    }
    return ret;
  }

  private createThousandSeparator(target: number) {
    let targetStr = String(target);
    if (target < 0 && targetStr.startsWith('-')) {
      targetStr = targetStr.slice(1);
    }
    return '￥' + ((target < 0) ? '-' : '') + targetStr.split(/(?=(?:\d{3})+$)/).join();
  }
}
