import { Injectable } from '@angular/core';
import { isNil as _isNil } from 'lodash';
import { MockScoringItems } from '../mock-data/mock-scoring-items';
import { ScoringItem } from 'src/app/core/models/scoring-item.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoringItemService {
  constructor() {}

  private items;

  public getList(): Observable<ScoringItem[]> {
    this.initListIfNull();

    const responseSource = new Subject<ScoringItem[]>();
    const response$ = responseSource.asObservable();
    setTimeout(() => {
      responseSource.next(this.items);
      responseSource.complete();
    }, 500);
    return response$;
  }

  private initListIfNull(): void {
    if (_isNil(this.items)) {
      this.items = MockScoringItems;
    }
  }
}
