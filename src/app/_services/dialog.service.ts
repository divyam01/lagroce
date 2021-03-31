import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
import {SpinnerComponent} from '../spinner/spinner.component'
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  openSpinner(){
    this.dialog.open(SpinnerComponent)
  }
}
