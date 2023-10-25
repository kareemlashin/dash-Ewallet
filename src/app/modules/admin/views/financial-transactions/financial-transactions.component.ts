import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PayPopUpComponent } from 'src/app/shared/components/popups/pay-pop-up/pay-pop-up.component';

@Component({
  selector: 'app-financial-transactions',
  templateUrl: './financial-transactions.component.html',
  styleUrls: ['./financial-transactions.component.scss']
})
export class FinancialTransactionsComponent {


  constructor (private dialog: MatDialog) {

  }
  openDialog() {

    const dialogRef = this.dialog.open(PayPopUpComponent, {
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
