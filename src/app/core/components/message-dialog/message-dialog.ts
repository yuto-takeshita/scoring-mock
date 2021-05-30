import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isNil as _isNil, isEmpty as _isEmpty } from 'lodash';

export enum DIALOG_TYPE {
  INFO,
  ERROR,
  CONFIRM,
}

export interface DialogInterface {
  title: string;
  messages: string[];
  type: DIALOG_TYPE;
  onAfterClosed: () => void;
  onAfterAccepted?: () => void;
  onAfterCanceled?: () => void;
}

@Component({
  selector: 'message-dialog',
  templateUrl: 'message-dialog.html',
  styleUrls: ['message-dialog.scss'],
})
export class MessageDialog implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<MessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInterface
  ) {}

  ngOnInit() {}

  public onClickClose($event) {
    this.dialogRef.close();
  }

  public onClickCancel($event) {
    this.dialogRef.close(false);
  }

  public onClickAccept($event) {
    this.dialogRef.close(true);
  }

  public isInfoDialog(type: DIALOG_TYPE) {
    return type === DIALOG_TYPE.INFO;
  }

  public isConfirmDialog(type: DIALOG_TYPE) {
    return type === DIALOG_TYPE.CONFIRM;
  }

  public isErrorDialog(type: DIALOG_TYPE) {
    return type === DIALOG_TYPE.ERROR;
  }
}
