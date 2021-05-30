import { Pipe, PipeTransform } from '@angular/core';

/**
 * オブジェクトを配列に変換するパイプ
 */
@Pipe({
  name: 'asObjectArray',
  pure: false
})

export class AsObjectArrayPipe implements PipeTransform {
  transform(object): any {
    const ret = [];
    if (!object) {
      return ret;
    }

    Object.keys(object).forEach(key => {
      ret.push(object[key]);
    });

    return ret;
  }
}
