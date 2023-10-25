import { Component, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.scss']
})
export class IndexDashboardComponent {
  closeNotificationMenu: boolean = false


  closeMenu: boolean = false

  constructor (private router: Router) {
    if (window.innerWidth <= 992) {
      this.closeMenu = true
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.closeMenu = true;
        }
      });
    }

  }
  // for side menu
  onclickedbtn(eventData: any) {
    this.closeMenu = eventData
  }
  openMenu() {
    this.closeMenu = false
  }



  // for notification menu
  onclickedbtnNoti(eventData: any) {
    this.closeNotificationMenu = eventData
  }



}
