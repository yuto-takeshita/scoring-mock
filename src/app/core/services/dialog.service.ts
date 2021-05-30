import { Injectable } from '@angular/core';
import { isNil as _isNil, isEmpty as _isEmpty } from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogInterface,
  DIALOG_TYPE,
  MessageDialog,
} from '../components/message-dialog/message-dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  info(title: string, message: string[] | string) {
    const dialogData = {
      title: title ? title : null,
      messages: typeof message === 'string' ? [message] : message,
      type: DIALOG_TYPE.INFO,
      onAfterClosed: null,
    };
    this.openDialog(dialogData, false);
  }

  error(title: string, message: string[] | string) {
    const dialogData = {
      title: title ? title : null,
      messages: typeof message === 'string' ? [message] : message,
      type: DIALOG_TYPE.ERROR,
      onAfterClosed: null,
    };
    this.openDialog(dialogData, false);
  }

  confirm(
    title: string,
    message: string,
    onAfterAccepted: () => void,
    onAfterCanceled: () => void
  ) {
    const dialogData = {
      title: title ? title : null,
      messages: typeof message === 'string' ? [message] : message,
      type: DIALOG_TYPE.CONFIRM,
      onAfterClosed: null,
      onAfterAccepted,
      onAfterCanceled,
    };
    this.openDialog(dialogData, true);
  }

  private openDialog(data: DialogInterface, disableClose: boolean) {
    // ダイアログをオープン
    const ref = this.dialog.open(MessageDialog, {
      width: 'auto',
      height: 'auto',
      data,
      disableClose,
    });

    // ダイアログクローズを監視
    ref.afterClosed().subscribe((res) => {
      if (data.type !== DIALOG_TYPE.CONFIRM) {
        if (data.onAfterClosed) {
          data.onAfterClosed();
        }
      } else {
        if (res) {
          if (data.onAfterAccepted) {
            data.onAfterAccepted();
          }
        } else {
          if (data.onAfterCanceled) {
            data.onAfterCanceled();
          }
        }
      }
      return;
    });
  }
}
