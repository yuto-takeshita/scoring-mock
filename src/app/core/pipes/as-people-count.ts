import { Pipe, PipeTransform } from '@angular/core';
import { isNil as _isNil, isNumber as _isNumber } from 'lodash';

/**
 * 数値を人数に変換するパイプ
 */
@Pipe({
  name: 'asPeopleCount',
  pure: false
})
export class AsPeopleCountPipe implements PipeTransform {
  transform(value, decimalPlaces?): any {
    let ret;
    try {
      let target: number;
      if (_isNumber(value)) {
        target = value;
      } else {
        target = Number(value);
      }
      if (!_isNil(target)) {
        const pow = (decimalPlaces) ? Math.pow(10, decimalPlaces) : 1;
        target = Math.round(target * pow) / pow;
        let targets: string[];
        targets = String(target).split('.');
        ret = targets[0].split(/(?=(?:\d{3})+$)/).join();
        if (targets.length > 1) {
          ret = ret + '.' + targets[1];
        }
      }
    } catch (e) {
      ret = String(value);
    }
    return ret + '人';
  }
}
