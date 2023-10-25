import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  // close menu when clicked
  @Output() closeMenuOut = new EventEmitter<boolean>();
  closeMenuF() {
    this.closeMenuOut.emit(true);
  }

}
