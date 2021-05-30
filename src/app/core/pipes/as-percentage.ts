import { Pipe, PipeTransform } from '@angular/core';
import { isNil as _isNil, isNumber as _isNumber } from 'lodash';

/**
 * 数値を％形式に変換するパイプ
 */
@Pipe({
  name: 'asPercentage',
  pure: false
})

export class AsPercentagePipe implements PipeTransform {
  transform(value, decimalPlaces?): any {
    let target: number;
    if (_isNumber(value)) {
      target = value * 100;
    } else {
      target = Number(value) * 100;
    }

    let ret = '';
    if (!_isNil(target)) {
      const pow = (decimalPlaces) ? Math.pow(10, decimalPlaces) : 1;
      target = Math.round(target * pow) / pow;
      ret = target + '%';
    }
    return ret;
  }
}
