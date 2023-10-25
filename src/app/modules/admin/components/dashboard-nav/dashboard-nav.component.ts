import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutPopupComponent } from 'src/app/shared/components/popups/logout-popup/logout-popup.component';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {
  public pageTitleArray: any = [];
  viewNotifiations: boolean = false


  // pass closed notification
  @Output() closeNotificationOut = new EventEmitter<boolean>();



  constructor (public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  // logout
  logout() {
    const dialogRef = this.dialog.open(LogoutPopupComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // notification
  viewDropNotifiations() {
    this.viewNotifiations = !this.viewNotifiations;
    this.closeNotificationOut.emit(this.viewNotifiations);
  }


  // change language

  toggleLang() {
  }

}
