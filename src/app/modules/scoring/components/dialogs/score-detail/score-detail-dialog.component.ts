import {
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  isNil as _isNil,
  isEmpty as _isEmpty,
  cloneDeep as _cloneDeep,
} from 'lodash';

export interface ScoreDetailDialogInterface {
  columnName: string;
  score: number;
  rank: string;
}

@Component({
  selector: 'app-score-detail-dialog',
  templateUrl: 'score-detail-dialog.component.html',
  styleUrls: ['score-detail-dialog.component.scss'],
})
export class ScoreDetailDialog implements OnInit {
  public columns: { header: string; field: string }[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ScoreDetailDialogInterface[],
    private dialogRef: MatDialogRef<ScoreDetailDialog>
  ) {}

  ngOnInit() {
    this.columns = [
      { header: '評価項目', field: 'columnName' },
      { header: '評価点', field: 'score' },
      { header: 'ランク', field: 'rank' },
    ];
  }

  public onClickClose($event) {
    this.dialogRef.close();
  }
}
