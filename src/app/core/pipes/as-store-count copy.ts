import { Pipe, PipeTransform } from '@angular/core';
import { isNil as _isNil, isEmpty as _isEmpty } from 'lodash';

/**
 * 空やnullを代替テキストに変換するパイプ
 */
@Pipe({
  name: 'asAltTextPipe',
  pure: false,
})
export class AsAltTextPipe implements PipeTransform {
  transform(value: string, ...args: string[]): any {
    try {
      if (_isNil(value) || _isEmpty(value)) {
        return args[0];
      }
    } catch (e) {}
    return value;
  }
}
