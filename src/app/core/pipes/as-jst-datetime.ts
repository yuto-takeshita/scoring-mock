import { Pipe, PipeTransform } from '@angular/core';
import { isNil as _isNil, isNumber as _isNumber } from 'lodash';
import { DateConverter } from '../helper/date-converter';

/**
 * UTC時刻をJSTに変換するパイプ
 */
@Pipe({
  name: 'asJstDatetimePipe',
  pure: false,
})
export class AsJstDatetimePipe implements PipeTransform {
  transform(value): any {
    let ret;
    try {
      if (!_isNil(value)) {
        ret = DateConverter.utcStringToJSTString(value);
      }
    } catch (e) {
      ret = String(value);
    }
    return ret;
  }
}
