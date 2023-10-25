import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-pop-up',
  templateUrl: './pay-pop-up.component.html',
  styleUrls: ['./pay-pop-up.component.scss']
})
export class PayPopUpComponent {
  constructor (
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  pay() {


  }
}
